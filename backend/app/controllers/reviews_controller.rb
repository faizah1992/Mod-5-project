class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render(json: reviews)
      end
    
    def create
        review = Review.create({
            comment: params[:comment],
            rating: params[:rating],
            user_id: self.current_user.id,
            item_id: item.id    
        })
        render(json: review)
    end
    
end