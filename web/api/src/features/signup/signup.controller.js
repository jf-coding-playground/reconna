const signupService = require('./signup.service');

module.exports = async (req, res) => {
  try {
    await signupService(req.body);
    
    res.send('User created!');
  } 
  catch (error) {
    res.status(400).send(`User was not created!, error: ${error.message}`);
  }
};