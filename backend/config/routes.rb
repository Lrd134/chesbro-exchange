Rails.application.routes.draw do
  resources :tokens, only: :show
  resources :balances
  resources :users
  resources :orders
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
