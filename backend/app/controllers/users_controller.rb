class UsersController < ApplicationController

    def index
        users = User.all
        render(json: users)
    end
    
    def create
       
        if User.find_by(email: params[:email]) == nil
            
            user = User.create({
                first_name: params[:first_Name],
                last_name: params[:last_Name],
                password: params[:password],
                email: params[:email],
                phone_number: params[:phone_number],
                address: params[:address]
            })

            render(json: user)
        else
            render(json: ["Email already exists."])
        end
    end

    def show    
        user = User.find(params[:id])

        render(json: user)
    end 

    def define_current_user
        if params[:id]
            @current_user = User.find(params[:id])
        else
            @current_user = User.new
        end
    end

    def current_user
        @current_user
    end

end
