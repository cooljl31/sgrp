import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
	onSubmit = e => {
		e.preventDefault();
		const message = e.target.message.value;
		this.props.addMessage(message);
		e.target.message.value = '';
	};

	render() {
		const { activeChannel } = this.props;
		const input =
			activeChannel !== undefined ? (
				<input className="form-control" placeholder="Add Message..." name="message" type="text" />
			) : null;
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">{input}</div>
			</form>
		);
	}
}

UserForm.propType = {
	addMessage: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
};

export default UserForm;
