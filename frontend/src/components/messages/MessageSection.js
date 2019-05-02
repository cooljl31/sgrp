import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageForm from './MessageForm';
import MessageList from './MessageList';

class MessageSection extends Component {
	render() {
		const { activeChannel } = this.props;
		return (
			<div className="messages-container panel panel-primary">
				<div className="panel-heading">
					<strong>{activeChannel ? activeChannel.name : ''}</strong>
				</div>
				<div className="panel-body messages">
					<MessageList {...this.props} />
					<MessageForm {...this.props} />
				</div>
			</div>
		);
	}
}

MessageSection.propType = {
	messages: PropTypes.array.isRequired,
	addMessage: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
};

export default MessageSection;
