import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
	onSubmit = e => {
		e.preventDefault();
		const userName = e.target.user.value;
		this.props.addUser(userName);
		e.target.user.value = '';
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<input className="form-control" placeholder="Add User" type="text" name="user" />
				</div>
			</form>
		);
	}
}

UserForm.propType = {
	addUser: PropTypes.func.isRequired
};

export default UserForm;
