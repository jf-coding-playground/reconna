function isValidEmail(email) {
  console.log('TCL: isValidEmail -> email', email);
  // TODO: implement
}

function isValidPassword(password) {
  console.log('TCL: isValidPassword -> password', password);
  let hasUpperCase;
  let hasLowerCase;
  let hasNumber;
  let hasMinLength;

  // TODO: implement

  return hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
}


module.exports = {
  isValidEmail,
  isValidPassword
};