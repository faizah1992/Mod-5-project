class OrdersController < ApplicationController
    def index
        orders = Order.all
        render(json: orders, :include => [:order_items, :items])
    end

    def create
      
        user = User.find(params[:order][:user_id])
        items = user.cart.items

        order = Order.create(user_id: user.id, total: params[:total], address: params[:address]);
        user.cart.cart_items.each do |c|
            order_item = OrderItem.create({
                order_id: order.id,
                item_id: c.item_id,
                size: c.size,
                quantity: c.quantity
            })
        end
                
      
        user.cart.cart_items.destroy_all
        render(json: order, :include => [:order_items, :items])
    end


    
    
end

  # items = user.cart.items
# items.each do |item|
    # OrderItem.create(order_id: order.id, item_id: item.id)
# end