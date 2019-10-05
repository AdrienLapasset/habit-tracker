module.exports = {
	fillDate: function(name) {
		let Habit = require('./habit.model');

		var today = new Date();
		var startDate = new Date('2019-09-25');
		Date.prototype.addDays = function(d) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + d);
			return date;
		};

		while (startDate <= today) {
			let curentDay = startDate;
			let habit = new Habit({
				date: curentDay,
				name: name,
				isChecked: false
			});
			habit.save();
			startDate = startDate.addDays(1);
		}
	},

	fillToday: function() {
		let HabitList = require('./habitList.model');

		console.log(HabitList);
	}
};
