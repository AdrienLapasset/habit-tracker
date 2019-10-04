import React, { Component } from 'react';
import './Table.scss';
import Days from '../Days/Days';
import AddHabit from '../AddHabit/AddHabit';
import AddHabitBtn from '../AddHabit/AddHabitBtn/AddHabitBtn';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			habits: [],
			isAddHabit: false
		};
	}

	componentDidMount() {
		fetch('http://localhost:4000/habits/list').then((response) => response.json()).then((data) => {
			this.setState({ habits: data });
		});
	}

	handleAddHabit = () => {
		this.setState((prevState) => ({ isAddHabit: !prevState.isAddHabit }));
	};

	render() {
		const habitsList = this.state.habits.map((habit, i) => (
			<div key={i} className="habit">
				{habit.name}
			</div>
		));

		return (
			<div className="Table">
				<div className="habits">
					{habitsList}
					<AddHabitBtn onShowAddHabit={this.handleAddHabit} />
					{this.state.isAddHabit ? <AddHabit onShowAddHabit={this.handleAddHabit} /> : ''}
				</div>
				<Days />
			</div>
		);
	}
}

export default Table;
