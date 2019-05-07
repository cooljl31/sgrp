import { EventEmitter } from 'events';

class Socket {
	constructor(ws = new WebSocket(), ee = new EventEmitter()) {
		this.ws = ws;
		this.ee = ee;
		ws.onmessage = this.message;
		ws.onopen = this.open;
		ws.onclose = this.close;
	}

	on = (name, fn) => {
		this.ee.on(name, fn);
	};

	off = (name, fn) => {
		this.ee.removeListener(name, fn);
	};

	emit = (name, data) => {
		const message = JSON.stringify({ name, data });
		this.ws.send(message);
	};

	message = e => {
		try {
			const message = JSON.parse(e.data);
			console.log('message', message);
			this.ee.emit(message.name, message.data);
		} catch (error) {
			this.ee.emit('Error', error);
		}
	};

	open = () => {
		this.ee.emit('connect');
	};

	close = () => {
		this.ee.emit('disconnect');
	};
}

export default Socket;
