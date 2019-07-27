const { userModel, userRepository } = require('../../entities/user');
const { isValidEmail, isValidPassword } = require('./signup.validation');

module.exports = async (user) => {
  const { email, password } = user;

  if (!isValidEmail(email)) throw new Error('Invalid email was provided!');
  if (!isValidPassword(password)) throw new Error('Invalid password provided!');

  const userFound = await userRepository.find(email);
  if(userFound) throw new Error('User exists already!');

  const newUser = new userModel(user);

  return await userRepository.save(newUser);
};
