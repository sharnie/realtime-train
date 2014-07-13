TRAIN
id | name
---------
1  | 2
2  | 5
2  | 3

ASC
  = has_many :train_stations
  = has_many :stations, through: :train_station

STATION
id | name                 | station_id
--------------------------------------
1  | Times Sq - 42 St     | 127
2  | 34 St - Penn Station | 128
2  | Gun Hill Rd          | 208

ASC
  = has_many :train_stations
  = has_many :trains, through: :train_station

TRAIN_STATION
train_id | station_id
---------------------
1        | 2
2        | 5
2        | 3

ASC
  = belongs_to :train
  = belongs_to :station