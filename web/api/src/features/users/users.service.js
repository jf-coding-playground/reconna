const { userRepository } = require('../../entities/user');

async function getAllUsers() {
  const users = await userRepository.findAll();

  return users;
}

module.exports = {
  getAllUsers
};