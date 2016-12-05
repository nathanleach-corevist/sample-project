if(Meteor.users.find().count() === 0) {

  // User Fixtures
  var userObject = {
    username: "test_user",
    email: "cjstingl@gmail.com",
    password: "password"
  };

  var userID = Accounts.createUser(userObject);
  var b2bUser = Meteor.users.findOne(userID);
}
