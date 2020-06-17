class CartItemsController < ApplicationController
    def index
        cart_items = CartItem.all
        render(json: cart_items)
    end

def create

    cart_item = CartItem.create({
        cart_id: self.current_user.cart.id,
        item_id: params[:cartItem][:id],
        quantity: 1,
        size: params[:size]
    })
    render(json: cart_item)
end

    def cart_item_params
        params.permit(:cartItem, :size)
    end

    def update  
       
        cart_item = CartItem.find(params[:id])
        cart_item.update({
            quantity: params[:quantity]
        })
      
        
            render(json: cart_item, :include => :item)
      
    end


    def destroy
  
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
        render json: {message: "there is no item in the cart"}

    end




   
end


