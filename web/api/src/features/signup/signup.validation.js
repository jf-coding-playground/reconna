const emailExistence = require('email-existence');

async function isValidEmail(email) {
  try {
    const isEmail = checkEmailFormat(email);

    if (!isEmail) {
      throw new Error('Invalid email format!');
    }

    // const emailExists = await checkEmailExists(email);

    // if (!emailExists) {
    //   throw new Error('Email does not exist!');
    // }

    return true;
  }
  catch (error) {
    return false;
  }
}

function checkEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkEmailExists(email) {
  return new Promise((resolve, reject) => {
    try {
      emailExistence.check(email, function (error, response) {
        if (error) {
          throw new Error('Provided email doesnt exists!');
        }
        else {
          resolve(response);
        }
      });
    }
    catch (error) {
      reject(error);
    }
  });
}

function isValidPassword(password) {
  try {
    const passwordRequirementsMet = checkPasswordMeetsRequirements(password);

    if (!passwordRequirementsMet) {
      throw new Error('Password did not meet the minimum requirements!');
    }
    else {
      return true;
    }
  }
  catch (error) {
    return false;
  }
}

function checkPasswordMeetsRequirements(password) {
  try {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const minLength = 5;

    const hasLowerCase = password.includes(lowerCaseLetters);
    const hasUpperCase = password.includes(upperCaseLetters);
    const hasNumber = password.includes(numbers);
    const hasMinLength = password.length < minLength;

    if (!hasLowerCase) {
      throw new Error('Password must contain a lowercase letter!');
    }
    if (!hasUpperCase) {
      throw new Error('Password must contain a uppercase letter!');
    }
    if (!hasNumber) {
      throw new Error('Password must contain a number!');
    }
    if (!hasMinLength) {
      throw new Error('Password must be atleast 6 characters long!');
    }

    return true;

  }
  catch (error) {
    return false;
  }
}

module.exports = {
  isValidEmail,
  isValidPassword
};