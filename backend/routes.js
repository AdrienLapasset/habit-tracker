module.exports = function(app, express) {
	var addHabits = require('./addHabits');

	const habitRoutes = express.Router();

	let HabitList = require('./habitList.model');
	let Habit = require('./habit.model');

	habitRoutes.route('/').get(function(req, res) {
		Habit.find(function(err, habits) {
			if (err) {
				console.log(err);
			} else {
				res.json(habits);
			}
		});
	});

	habitRoutes.route('/list').get(function(req, res) {
		HabitList.find(function(err, habitList) {
			if (err) {
				console.log(err);
			} else {
				res.json(habitList);
			}
		});
	});

	habitRoutes.route('/add').post(function(req, res) {
		let habitList = new HabitList(req.body);
		habitList
			.save()
			.then((habitList) => {
				addHabits(req.body.name);
				res.status(200).json({ habitList: 'habit added successfully', habitList });
			})
			.catch((err) => {
				res.status(400).send('adding new habit failed');
			});
	});

	habitRoutes.route('/byDay/:date').get(function(req, res) {
		Habit.find({ date: new Date(req.params.date) }).then((habits) => {
			res.json(habits);
		});
	});

	habitRoutes.route('/update/:id').post(function(req, res) {
		Habit.findById(req.params.id, function(err, habit) {
			if (!habit) res.status(404).send('data is not found');
			else {
				habit.isChecked = req.body.isChecked;
			}
			habit
				.save()
				.then((habit) => {
					res.json('habit updated!');
				})
				.catch((err) => {
					res.status(400).send('Update not possible');
				});
		});
	});

	habitRoutes.route('/delete/:id').delete(function(req, res) {
		Habit.findByIdAndRemove(req.params.id, (err, habit) => {
			if (err) return res.status(500).send(err);
			const response = {
				message: 'Habit successfully deleted',
				id: habit._id
			};
			return res.status(200).send(response);
		});
	});

	app.use('/habits', habitRoutes);
};
