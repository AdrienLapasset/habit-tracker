import React, { Component } from 'react';

export class AddHabit extends Component {
	constructor(props) {
		super(props);
		this.state = { habit: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ habit: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		fetch('http://localhost:4000/habits/add', {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ name: this.state.habit })
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.onShowAddHabit();
				window.location.reload();
			});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.habit} onChange={this.handleChange} />
				<input type="submit" value="Ok" />
			</form>
		);
	}
}

export default AddHabit;
