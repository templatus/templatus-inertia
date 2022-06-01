require 'sidekiq/web'

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  mount Sidekiq::Web => '/sidekiq'

  if Rails.configuration.x.cypress
    namespace :cypress do
      delete 'cleanup', to: 'cleanup#destroy'
    end
  end

  resources :clicks, only: %i[index create]
  resource :about, controller: 'about'

  get '/manifest.v1.webmanifest', to: 'statics#manifest', as: :webmanifest

  root to: 'clicks#index'
end
