Rails.application.routes.draw do
  root 'trains#index'
  get  '/stations/:name.json' => 'stations#search', as: 'search'
  get  '/stations/:id/trains.json' => 'stations#train_station'
  
  resources :stations
end
