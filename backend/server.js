const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const habitRoutes = express.Router();
const PORT = 4000;

let Habit = require('./habit.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/habit-tracker', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

habitRoutes.route('/').get(function(req, res) {
	Habit.find(function(err, habits) {
		if (err) {
			console.log(err);
		} else {
			res.json(habits);
		}
	});
});

habitRoutes.route('/add').post(function(req, res) {
	let habit = new Habit(req.body);
	habit
		.save()
		.then((habit) => {
			res.status(200).json({ habit: 'habit added successfully', habit });
		})
		.catch((err) => {
			res.status(400).send('adding new habit failed');
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

app.use('/habits', habitRoutes);

app.listen(PORT, function() {
	console.log('Server is running on Port: ' + PORT);
});
