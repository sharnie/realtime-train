class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string :name
      t.integer :station_id

      t.timestamps
    end
    add_index :stations, :name
  end
end
