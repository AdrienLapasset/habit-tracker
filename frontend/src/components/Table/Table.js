import React, { Component } from 'react';
import Days from '../Days/Days';
import './Table.scss';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = { habits: [] };
	}

	componentDidMount() {
		fetch('http://localhost:4000/habits/').then((response) => response.json()).then((data) => {
			this.setState({ habits: data });
		});
	}

	render() {
		const habitsList = this.state.habits.map((habit, i) => (
			<div key={i} className="habit">
				{habit.name}
			</div>
		));

		return (
			<div className="Table">
				<div className="habits">{habitsList}</div>
				<Days />
			</div>
		);
	}
}

export default Table;
