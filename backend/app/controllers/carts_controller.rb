class CartsController < ApplicationController
    def index
        carts = Cart.all
        render(json: carts)
    end


    def show
        cart = Cart.find(params[:id])
    end

   
end
