class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles do |t|
      t.string :name
      t.string :created_by
      t.string :updated_by
      t.boolean :active
      t.boolean :admin

      t.timestamps
    end
  end
end
