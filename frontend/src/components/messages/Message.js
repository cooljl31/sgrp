import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';

class Message extends Component {
	onClick = e => {
		e.preventDefault();
		const { setMessage, message } = this.props;
		setMessage(message);
	};

	render() {
		const { message } = this.props;
		console.log('message', message);
		const createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD');
		return (
			<li className="message">
				<div className="author">
					<strong>{message.author}</strong>
					<i className="timestamp">{createdAt}</i>
				</div>
				<div className="body">{message.body}</div>
			</li>
		);
	}
}

Message.propTypes = {
	message: PropTypes.object.isRequired
};

export default Message;
