const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	name: String,
	picture: String,
	category: String,
	shortDesc:String,
	longDesc:String,
	createdAt: String,
}, {
	versionKey: false
});

module.exports = mongoose.model('Recipe', Recipe);
