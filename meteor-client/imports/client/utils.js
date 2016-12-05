// UTILITIES
const Utilities = {
  trimInput(val) {
    var TRIM_REQEX = /^\s*|\s*$/g;
    return val.replace(TRIM_REQEX, "");
  },


  // VALIDATION UTILITIES
  usernameIsValid(username){
    if(_.isEmpty(username)) {
      return false
    } else {
      return username.length >= 3
    }
  },
  emailIsValid(email){
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    return re.test(email);
  },
  passwordIsValid(password) {
    if(_.isEmpty(password)) {
      return false
    } else {
      return password.length >= 6
    }
  },
  passwordMatchesConfirm(password, confirm){
    return password === confirm
  }
}

export default Utilities
