Rails.application.routes.draw do
  root 'trains#index'
  get  '/stations/:name.json' => 'stations#search', as: 'search'
  
  resources :stations
end
