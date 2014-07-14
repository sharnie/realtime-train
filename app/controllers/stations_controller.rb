class StationsController < ApplicationController
  def search
    stations = Station.filter_stations(params[:name], 20)
    render json: stations.to_json
  end

  def train_station
    result   = {}
    station = Station.find_by(station_id: params[:id])
    station.trains.each do |train|
      result[station.station_id] ||= { 
        station: station,
        trains: []
      }
      result[station.station_id][:trains] << { id: train.id, name: train.name }
    end
    render json: result.to_json
  end
end