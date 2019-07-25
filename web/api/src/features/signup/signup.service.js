const { userModel, userRepository } = require('../../entities/user');

module.exports = async ({ email, password }) => {
  const userExists = await userRepository.find(email);
  if(userExists) throw new Error('User exists already!');

  const newUser = new userModel({ email, password });

  return await userRepository.save(newUser);
}