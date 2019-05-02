import React, { Component } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component {
	render() {
		return (
			<ul>
				{this.props.messages.map(mgs => {
					return <Message key={mgs.id} message={mgs} />;
				})}
			</ul>
		);
	}
}

MessageList.propsType = {
	messages: PropTypes.array.isRequired
};

export default MessageList;
