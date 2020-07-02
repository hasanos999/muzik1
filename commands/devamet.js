const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Bir müzik dinleyebilmen için sesli bir kanalda bulunman gerekiyor.`)
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`<:voice:720120618275831869> Şu anda devam ettirebilmem için bir müzik çalmıyor.`)
  
  let song = await client.player.resume(message.guild.id);
  let çalan = await client.player.nowPlaying(message.guild.id);
  
  message.channel.send(`<:invisible:720120617772384269> **${çalan.name}** ${çalan.author} isimli şarkı devam ettiriliyor.`)
    
}

module.exports.config = {
  name: "devamet",
  aliases: ['devam-et']
}
