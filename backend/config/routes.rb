Rails.application.routes.draw do
  resources :items
  resources :users
  resources :reviews
  resources :order_items
  resources :orders
  resources :carts
  resources :cart_items
  
  post('/charges', to: 'charges#create')
  get('/getuser', to: 'users#get_user')
  post('/login', to: 'authentication#login')
  get('/login', to: 'authentication#get_session_user')
  get('/logout', to: 'authentication#logout')
  
 
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
