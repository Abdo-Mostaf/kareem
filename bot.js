const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654678048091668494")
setInterval(function() {
channel.send(`Dark Dark Dark`);
}, 30)
})

client.login(process.env.BOT_TOKEN);