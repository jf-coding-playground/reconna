const mongoose = require('mongoose');

const user = mongoose.model('User', new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	},
	name: {
		type: String,
		required: false,
		minlength: 5,
		maxlength: 50
	},
	phoneNumber: {
		type: String,
		required: false,
		minlength: 12,
		maxlength: 12
	}
}));

module.exports = user;