import React, { Component } from 'react';
// import './Day.scss';

class Habit extends Component {
	constructor(props) {
		super(props);
		this.state = { habit: props.habit };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		let currentHabit = this.state.habit;
		currentHabit.isChecked = value;
		this.setState({ habit: currentHabit });

		fetch('http://localhost:4000/habits/update/' + this.props.habit._id, {
			method: 'POST',
			body: JSON.stringify({ isChecked: currentHabit.isChecked })
		});
	}

	render() {
		return (
			<div className="habit">
				{this.state.habit.name}
				<input
					name={this.state.habit.name}
					type="checkbox"
					checked={this.state.habit.isChecked}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default Habit;