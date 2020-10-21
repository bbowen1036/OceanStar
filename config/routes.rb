Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :index, :show]
    resources :sessions, only: [:create, :destroy]
    resources :products, only: [:show, :index, :create, :destroy]
    resources :carts
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
  end
  
  root 'static_pages#root'
end
