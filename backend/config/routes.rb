Rails.application.routes.draw do
  resources :items
  resources :users
  get('/checkuser', to: 'users#current_user')
  resources :reviews
  resources :order_items
  resources :orders
  
  
  post('/login', to: 'authentication#login')
  get('/logout', to: 'authentication#logout')
  
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
