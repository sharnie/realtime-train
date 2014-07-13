class TrainStation < ActiveRecord::Base
  belongs_to :train, dependent: :destroy
  belongs_to :station, dependent: :destroy
end
