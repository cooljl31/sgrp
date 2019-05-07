import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSelection';
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';
import Socket from './socket';
import './App.css';

class App extends Component {
	state = {
		channels: [],
		users: [],
		messages: [],
		activeChannel: {},
		connected: false
	};

	componentDidMount() {
		const ws = new WebSocket('ws://localhost:4000');
		let socket = (this.socket = new Socket(ws));
		socket.on('connect', this.onConnect);
		socket.on('disconnect', this.onDisconnect);
		socket.on('channel add', this.onAddChannel);
		socket.on('user add', this.onAddUser);
		socket.on('user edit', this.onEditUser);
		socket.on('user remove', this.onRemoveUser);
		socket.on('message add', this.onMessageAdd);
	}

	onMessageAdd = message => {
		const { messages } = this.state;
		messages.push({ message });
		this.setState({ messages });
	};
	onRemoveUser = removeUser => {
		const { users } = this.state;
		users.filter(user => {
			return user.id !== removeUser.id;
		});
		this.setState({ users });
	};

	onAddUser = user => {
		const { users } = this.state;
		users.push({ user });
		this.setState({ users });
	};

	onEditUser = edituser => {
		const { users } = this.state;
		users.map(user => {
			if (edituser.id === user.id) return edituser;
			return user;
		});
		this.setState({ users });
	};

	onConnect = () => {
		this.setState({ connected: true });
		this.socket.emit('channel subscribe');
		this.socket.emit('user subscribe');
	};

	onDisconnect = () => {
		this.setState({ connected: false });
	};

	onAddChannel = channel => {
		const { channels } = this.state;
		channels.push(channel);
		this.setState({ channels });
	};

	addChannel = name => {
		this.socket.emit('channel add', { name });
	};

	setChannel = activeChannel => {
		this.setState({ activeChannel });
		this.socket.emit('channel unsubscribe');
		this.setState({ messages: [] });
		this.socket.emit('message subscribe', { channelId: activeChannel.id });
	};


	setUser = activeUser => {
		this.setState({ activeUser });
	};

	setUserName = name => {
		this.socket.emit('user edit', { name });
	};

	addMessage = body => {
		const { activeChannel } = this.state;
		this.socket.emit('message add', { channelId: activeChannel.id, body });
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
