class CartsController < ApplicationController
    def index
        carts = Cart.all
        render(json: items)
    end

   
end
