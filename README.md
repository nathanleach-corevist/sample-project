# Sample  Project

*A sample project using React/Redux on Meteor for the client alongside a basic Rails 5 API.*

The sample project is a work in progress that displays my initial steps to move an existing Rails 3 Application to a more modular web app that makes use of the new Rails 5 api for data purposes as-well-as React and Redux for the client side application. I chose to build the client-side app within the Meteor stack simply for quick prototyping purposes. I plan on converting it over to webpack and express should the project move production.

**Steps to run API:**
1. Open api directory in terminal
2. `bundle install`
3. `rails db:create`
4. `rails db:migrate`
5. `rails db:seed`
6. `rails server -p4000`


**Steps to run client (Meteor needed)**
1. Open client directory in terminal
2. Install Meteor if necessary [Meteor Installation](https://www.meteor.com/install)
3. `meteor`
4. Navigate to http://localhost:3000
5. Login using:
  - **User**: test_user
  - **PW**: password
