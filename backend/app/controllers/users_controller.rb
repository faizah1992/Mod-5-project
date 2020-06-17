class UsersController < ApplicationController

    def index
        users = User.all
        render(json: users)
    end
    
    def create
       
        if User.find_by(email: params[:email]) == nil
            
            user = User.create({
                first_name: params[:first_name],
                last_name: params[:last_name],
                password: params[:password],
                email: params[:email],
                phone_number: params[:phone_number],
                address: params[:address]
            })
            cart = Cart.create({
                user_id: user.id
            })
           
            render(json: user, :include => [:cart])
        else
            render(json: {error: "Email already exists."})
        end
    end

    def show    
        user = User.find(params[:id])

        render(json: user)
    end 

    
    def get_user
        user = {user: self.current_user, cart_items: self.current_user.cart.cart_items.as_json(include: :item), orders: self.current_user.orders.as_json(include: [:items, :order_items])}
       render(json: user)
    end

    def destroy
        user = User.find(params[:id])
        user.destroy

        render json: {message: "User has been deleted"}
    end


end
