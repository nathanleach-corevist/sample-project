class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :material_number
      t.string :description
      t.integer :available_quantity
      t.integer :unit_price

      t.timestamps
    end
  end
end
