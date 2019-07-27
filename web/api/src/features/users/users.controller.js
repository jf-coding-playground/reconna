const { getAllUsers } = require('./users.service');

async function getAllUsersController (req, res) {
  try {
    const users = await getAllUsers();

    res.send(`${users.length} Users were found: ${users} `);
  } 
  catch (error) {
    res.send('Users were not found!');
  }
}

module.exports = {
  getAllUsersController
};