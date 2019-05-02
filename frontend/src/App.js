import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSelection';
import UserSection from './components/users/UserSection';
import './App.css';

class App extends Component {
	state = {
		channels: [],
		users: []
	};

	addChannel = name => {
		const { channels } = this.state;
		channels.push({ id: channels.length, name });
		this.setState({ channels });
	};

	setChannel = activeChannel => {
		this.setState({ activeChannel });
	};

	addUser = name => {
		const { users } = this.state;
		users.push({ id: users.length, name });
		this.setState({ users });
	};

	setUser = activeUser => {
		this.setState({ activeUser });
	};

	render() {
		return (
			<div className="app">
				<div className="nav">
					<ChannelSection {...this.state} addChannel={this.addChannel} setChannel={this.setChannel} />
					<UserSection {...this.state} addUser={this.addUser} setUser={this.setUser} />
				</div>
			</div>
		);
	}
}

export default App;
