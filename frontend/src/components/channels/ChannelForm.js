import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
	onSubmit = e => {
		e.preventDefault();
		const channelName = e.target.name.value;
		this.props.addChannel(channelName);
		e.target.name.value = '';
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<input className="form-control" placeholder="Add Channel" type="text" name="name" />
				</div>
			</form>
		);
	}
}

ChannelForm.propType = {
	addChannel: PropTypes.func.isRequired
};

export default ChannelForm;
