class CreateUserRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_roles do |t|
      t.belongs_to :user, foreign_key: true, index: true
      t.belongs_to :role, foreign_key: true, index: true

      t.timestamps null: false
    end
  end
end
