class StationsController < ApplicationController
  def search
    @stations = Station.where("name LIKE ?", "%#{params[:name]}%").filter_stations(20)
    render json: @stations.to_json
  end
end