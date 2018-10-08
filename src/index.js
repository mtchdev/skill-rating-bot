const Discord = require('discord.js');
const client = new Discord.Client();

const Token = require('./config/token.json');

const event = (event) => require(`./events/${event}`);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('message', event('message'));

client.login(Token.value);