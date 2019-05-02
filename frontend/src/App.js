import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSelection';
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';
import './App.css';

class App extends Component {
	state = {
		channels: [],
		users: [],
		messages: [],
		activeChannel: {}
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

	addMessage = body => {
		const { messages, users } = this.state;
		const createdAt = new Date();
		const author = users.length > 0 ? users[0].name : 'anonymous';
		messages.push({ id: messages.length, body, createdAt, author });
		this.setState({ messages });
		console.log('addMessage', messages);
	};

	render() {
		return (
			<div className="app">
				<div className="nav">
					<ChannelSection {...this.state} addChannel={this.addChannel} setChannel={this.setChannel} />
					<UserSection {...this.state} addUser={this.addUser} setUser={this.setUser} />
				</div>
				<MessageSection {...this.state} addMessage={this.addMessage} />
			</div>
		);
	}
}

export default App;
