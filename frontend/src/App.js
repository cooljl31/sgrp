import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSelection';
import './App.css';

class App extends Component {
	state = {
		channels: []
	};

	addChannel = name => {
		const { channels } = this.state;
		channels.push({ id: channels.length, name });
		this.setState({ channels });
	};

	setChannel = activeChannel => {
		this.setState({ activeChannel });
	};

	render() {
		return (
			<div className="app">
				<div className="nav">
					<ChannelSection {...this.state} addChannel={this.addChannel} setChannel={this.setChannel} />
				</div>
			</div>
		);
	}
}

export default App;
