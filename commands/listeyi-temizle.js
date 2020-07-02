const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
 
  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Sesli bir kanalda bulunman gerekiyor.`)
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`<:voice:720120618275831869> Bir müzik çalmıyor.`)

  client.player.clearQueue(message.guild.id);

   message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | Liste temizlendi!` }})

}

module.exports.config = {
  name: "listeyi-temizle",
  aliases: ['listeyi-temizle']
}
