import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends Component {
	render() {
		return (
			<ul>
				{this.props.users.map(usr => {
					return <User key={usr.id} user={usr} {...this.props} />;
				})}
			</ul>
		);
	}
}

UserList.propsType = {
	users: PropTypes.array.isRequired,
	setUser: PropTypes.func.isRequired,
	activeUser: PropTypes.object.isRequired
};

export default UserList;
