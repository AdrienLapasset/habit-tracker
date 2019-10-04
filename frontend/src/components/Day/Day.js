import React, { Component } from 'react';
import './Day.scss';
import Habit from '../Habit/Habit';

class Day extends Component {
	constructor(props) {
		super(props);
		this.state = { habits: [] };
	}

	componentDidMount() {
		fetch('http://localhost:4000/habits/byDay/' + this.props.day)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ habits: data });
			});
	}

	render() {
		const habitsList = this.state.habits.map((habit, i) => <Habit key={i} habit={habit} />);

		return (
			<div className="Day">
				{this.props.day}
				{habitsList}
			</div>
		);
	}
}

export default Day;
