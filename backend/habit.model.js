const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Habit = new Schema({
	date: Date,
	name: String,
	isChecked: Boolean
});

module.exports = mongoose.model('Habit', Habit);
