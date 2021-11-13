const Discord = require('discord.js');
const config = require('./config.json');
const mta = require(`./mta-status/index`);
const client = new Discord.Client({ intents: [new Discord.Intents().add(32767)]  });

client.on('ready', () => {
	console.log(`Logged Us : ${client.user.tag}`);
	mta.status(`51.161.122.210`,`22003`).then(mta => {
		console.log(mta)
	}).catch(err => {
		console.log(err)
	})
});

client.login(config.token);