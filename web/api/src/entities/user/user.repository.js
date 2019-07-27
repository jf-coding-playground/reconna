const mongoose = require('mongoose');
const userModel = mongoose.model('User');

async function save(user) {
  const newUser = new userModel(user);
  await newUser.save();

  return newUser;
}

async function find(email) {
  const user = await userModel.findOne({ email });

  return user;
}

async function findAll() {
  const users = await userModel.find({}).exec();
  console.log('TCL: findAll -> users', users);

  return users;
}

module.exports = {
  save, 
  find,
  findAll
};