const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
var addHabits = require('./addHabits');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/habit-tracker', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

cron.schedule('0 0 * * *', () => {
	console.log('running a task every day');
});

addHabits.fillToday();
require('./routes')(app, express);

app.listen(PORT, function() {
	console.log('Server is running on Port: ' + PORT);
});
