import React, { Component } from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';

class ChannelList extends Component {
	render() {
		return (
			<ul>
				{this.props.channels.map(chan => {
					return <Channel key={chan.id} channel={chan} {...this.props} />;
				})}
			</ul>
		);
	}
}

ChannelList.propsType = {
	channels: PropTypes.array.isRequired,
	setChannel: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
};

export default ChannelList;
