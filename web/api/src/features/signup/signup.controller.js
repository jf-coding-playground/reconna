const signupService = require('./signup.service');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    await signupService({ email, password })
    
    res.send('User created!');
  } 
  catch (error) {
    res.send(`User was not created!, error: ${error.message}`)
  }
}