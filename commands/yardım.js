const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (client, message, args, prefix) => {
  
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setFooter(message.guild.name)
.setColor('GREEN')
.setTimestamp()

message.channel.send(client.commands.map(c => c.config.name))
  
} 

module.exports.config = {
  name: "yardım",
  aliases: ['yardım',"hlp"]
}
