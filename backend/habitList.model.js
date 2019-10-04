const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HabitList = new Schema({
	name: String
});

module.exports = mongoose.model('HabitList', HabitList);
