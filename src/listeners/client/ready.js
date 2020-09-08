const figlet = require('figlet');
const mongoose = require('mongoose');
const chalk = require('chalk');
// const axios = require('axios');

const Event = require('../../structures/Event');
const createManager = require('../../player/createManager.js');

mongoose.connect('mongodb+srv://testingeja:fahreza2004@cluster0.5crev.gcp.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = class Ready extends Event {
	constructor(...args) {
		super(...args);
	}

	async run() {
		createManager(this.client);
		this.client.music.init(this.client.user.id);

		const status = 'ear help';
		const statusType = 'LISTENING';
		this.client.user.setActivity(`${status}`, { type: `${statusType}` });
    
	}
};

