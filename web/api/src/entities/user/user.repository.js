const mongoose = require('mongoose');
const userModel = mongoose.model('User');

module.exports = {
  save: async (user) => {
    const newUser = new userModel(user);
    await newUser.save();

    return newUser;
  },
  find: async(email) => {
    const userFound = await userModel.findOne({ email });

    return userFound;
  }
}