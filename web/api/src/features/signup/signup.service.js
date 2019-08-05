const { userModel, userRepository } = require('../../entities/user');
const { isValidEmail, isValidPassword } = require('./signup.validation');

module.exports = async (user) => {
  try {
    const { email, password } = user;
    const isEmail = await isValidEmail(email);
    const isPassword = isValidPassword(password);

    if (!isEmail) {
      throw new Error('Invalid email was provided!');
    }
    if (!isPassword) {
      throw new Error('Invalid password provided!');
    }

    const userFound = await userRepository.find(email);

    if (userFound) {
      throw new Error('User already exists!');
    }

    const newUser = new userModel(user);
    const userSaved = await userRepository.save(newUser);

    if (!userSaved) {
      throw new Error('User was not saved!');
    }

    return userSaved;

  }
  catch (error) {
    return false;
  }
};
