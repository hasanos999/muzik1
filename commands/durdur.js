const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Bir müzik durdurmak için sesli bir kanalda bulunman gerekiyor.`)
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`<:voice:720120618275831869> Şu anda durdurabilmem için bir müzik çalmıyor.`)
  
  let song = await client.player.pause(message.guild.id);
            
  message.channel.send(`${client.emotes.stop} Çalan şarkı durduruldu.`)
    
}

module.exports.config = {
  name: "durdur",
  aliases: []
}
