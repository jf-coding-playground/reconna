const express = require('express');
const router = express.Router();
const { getAllUsersController } = require('./users.controller');

router.get('/all', getAllUsersController);

module.exports = router;