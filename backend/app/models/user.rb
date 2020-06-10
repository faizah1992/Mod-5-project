class User < ApplicationRecord
    has_secure_password()
    has_one :cart
    has_many :orders
    has_many :reviews
    has_many :items, through: :reviews
end
