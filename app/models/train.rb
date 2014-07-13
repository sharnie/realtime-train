class Train < ActiveRecord::Base
  has_many :train_stations
  has_many :stations, through: :train_stations
  
  validates :name, uniqueness: true
  validates_presence_of :name
end
