class StationsController < ApplicationController
  def search
    stations = Station.filter_stations(params[:name], 20)
    render json: stations.to_json
  end

  def train_station
    station = Station.find_by_station(params[:id])
    render json: station.to_json
  end
end