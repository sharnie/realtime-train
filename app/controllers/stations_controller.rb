class StationsController < ApplicationController
  def search
    @stations = Station.where("name LIKE ?", "%#{params[:name]}%")
    render json: @stations.to_json
  end
end