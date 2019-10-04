import React, { Component } from 'react';
import './Days.scss';
import Day from '../Day/Day';

class Days extends Component {
	constructor(props) {
		super(props);
		this.state = { days: [] };
	}

	componentDidMount() {
		var today = new Date();
		var startDate = new Date('2019-09-25');

		Date.prototype.addDays = function(d) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + d);
			return date;
		};

		var days = [];
		while (startDate <= today) {
			let curentDay = this.formatDate(startDate);
			days.push(curentDay);
			startDate = startDate.addDays(1);
		}

		this.setState({ days: days });
	}

	formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [ year, month, day ].join('-');
	}

	render() {
		const daysList = this.state.days.map((day, i) => <Day key={i} day={day} />);

		return <div className="Days">{daysList}</div>;
	}
}

export default Days;
