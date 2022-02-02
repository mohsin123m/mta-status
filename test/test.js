const Discord = require('discord.js');
const config = require('./config.json');
const mta = require(`./mta-status/index`);
const client = new Discord.Client({ intents: [new Discord.Intents().add(32767)]  });

client.on('ready', () => {
	console.log(`Logged Us : ${client.user.tag}`);
	mta.status(`141.95.225.51`,`22013`).then(mta => {
		console.log(mta)
	}).catch(err => {
		console.log(err)
	})
});

client.login(OTM4MzE2MjgzMTA2MTY0NzQ2.YfohIg.DIpVn4EdMrn4IBXcwJ9fm8pHM8Y);
