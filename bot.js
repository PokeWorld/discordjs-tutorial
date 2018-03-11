const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot is now ready!");
});

bot.on('message', msg => {
    if (msg.content == "ping") {
        msg.reply("pong!");
    }
    if (msg.content == "universe") {
        msg.channel.send("bot!");
    }
    if (msg.content == "avatar") {
        msg.reply(msg.author.avatarURL)
    }
});

bot.login("nope");
