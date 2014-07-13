class Station < ActiveRecord::Base
  has_many :train_stations
  has_many :trains, through: :train_stations
  
  validates :station_id, uniqueness: true
  validates_presence_of :name, :station_id
end