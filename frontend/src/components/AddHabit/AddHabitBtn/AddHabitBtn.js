import React, { Component } from 'react';

export class AddHabitBtn extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		fetch('http://localhost:4000/habits/add', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ name: 'toto' })
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	render() {
		return <button onClick={this.handleClick}>Add habit</button>;
	}
}

export default AddHabitBtn;
