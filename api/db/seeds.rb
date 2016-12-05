# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b2b_user = User.create(first_name: "test", last_name: "user", username: "test_user", email: "cjstingl@gmail.com", phone: "555-555-5555", roles: [], password: "password", password_confirmation: "password")

Product.create("material_number":"TPAS-100666","description":"Lorem ipsum dolor sit amet","available_quantity":500,"unit_price":1234)
Product.create("material_number":"TPAS-333999","description":"Wackey Whopper Widget","available_quantity":6000,"unit_price":4321)
Product.create("material_number":"1002468","description":"Another Random Product Desc","available_quantity":4444,"unit_price":6789)

Role.create("name": "Admin", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": true)
Role.create("name": "Change Order", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "Create Order", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "Order Requester", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "Pay Invoices", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "View Invoice", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "View Open Items", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
Role.create("name": "View Order", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": false)
allButAdminRole = Role.create("name": "All but Admin", "created_by": b2b_user.username, "updated_by": b2b_user.username, "active": true, "admin": true)

User.create(first_name: "Doug", last_name: "Danger", username: "ddanger", email: "dougy_danger@gmail.com", phone: "123-456-7890", roles: [allButAdminRole])
