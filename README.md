
# MTA STATUS

## 📂 | Installation
```sh
npm i mta-status
```

## 📜 | Setup
```js
const Discord = require('discord.js');
const config = require('./config.json');
const mta = require(`mta-status`);
const client = new Discord.Client({ intents: [new Discord.Intents().add(32767)]  });

client.on('ready', () => {
	console.log(`Logged Us : ${client.user.tag}`);
	mta.status(`Your IP`,`Your PORT`).then(mta => {
		console.log(mta)
	}).catch(err => {
		console.log(err)
	})
});

client.login(`Your Token`);
```

## 🍯| Data
<img src="https://cdn.discordapp.com/attachments/809533588856897556/908873572989153300/unknown.png" alt="Avatar">

## 👥 | Contact
DiscordTag: `MrSmith#0069`
DiscordID: `MrSmith#0069`
