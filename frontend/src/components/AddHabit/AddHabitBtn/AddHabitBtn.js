import React, { Component } from 'react';

export class AddHabitBtn extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onShowAddHabit();
	}

	render() {
		return <button onClick={this.handleClick}>Add habit</button>;
	}
}

export default AddHabitBtn;
