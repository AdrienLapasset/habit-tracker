import React, { Component } from 'react';
import Day from '../Day/Day';
import './Table.scss';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = { habits: [] };
	}

	componentDidMount() {
		fetch('http://localhost:4000/habits/')
			.then((response) => response.json())
			.then((data) => this.setState({ habits: data }));
	}

	render() {
		const renderHabits = this.state.habits.map((habit, i) => (
			<div key={i} className="habits__item">
				{habit.name}
			</div>
		));
		const renderDays = this.state.habits.map((habit, i) => <Day habit={habit} key={i} />);
		return (
			<div className="Table">
				<div className="habits">{renderHabits}</div>
				{renderDays}
			</div>
		);
	}
}

export default Table;
