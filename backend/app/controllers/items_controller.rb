class ItemsController < ApplicationController
    def index
        items = Item.all
        render(json: items)
    end

    def show
        items = Item.find(params[:id])    
        render(json: items)
     end 
end
