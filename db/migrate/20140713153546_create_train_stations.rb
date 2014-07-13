class CreateTrainStations < ActiveRecord::Migration
  def change
    create_table :train_stations do |t|
      t.integer :train_id
      t.integer :station_id

      t.timestamps
    end
  end
end
