class Station < ActiveRecord::Base
  has_many :train_stations
  has_many :trains, through: :train_stations
  
  validates :station_id, uniqueness: true
  validates_presence_of :name, :station_id

  scope :filter_stations, ->(query, count) {
    where("name LIKE ?", "%#{query}%").order('name DESC').limit(count)
  }

  scope :find_by_station, ->(station_id){
    station = Station.find_by(station_id: station_id)

    result  = { 
      station: {
        name: station.name,
        station_id: station.station_id,
        trains: []
      }
    }

    station.trains.each do |train|
      result[:station][:trains] << { id: train.id, name: train.name }
    end

    result
  }
end