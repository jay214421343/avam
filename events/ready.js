const Discord = require("discord.js");
const config = require("../configuration.json");
const mongoose = require("mongoose");

  
  let readyEmbed = new Discord.RichEmbed()
    .setTitle("Restarted Succefully!")
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setDescription(`Bot is fully operational. Succefully loaded \`${client.guilds.size}\` guilds, \`${client.channels.size}\` channels and \`${client.users.size}\` users.`)
    .setColor("BLURPLE")
    .setTimestamp();
  client.channels.get(require("../configuration.json").readyMessageChannel).send(readyEmbed);
  
  await client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help`, { type: "WATCHING" });
  await client.user.setStatus("online");
  console.log(`Logged in as ${client.user.tag}.`);
}
