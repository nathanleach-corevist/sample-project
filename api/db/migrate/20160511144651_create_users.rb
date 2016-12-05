class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username, index: :username
      t.string :email, index: :email
      t.string :phone
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
