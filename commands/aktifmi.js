const Discord = require('discord.js');
const data = require('quick.db')

module.exports.run = async (client, message, args) => {
  
  let prefix = '!'// botun prefixi
  let sahip = '613700645173592086'// senin idn
  
if(!args[0]) return message.channel.send(`Premium sisteminden yararlanmak için bot sahibinin sizin premiumunuzu aktif etmiş olması gerekiyor.
\`${prefix}premium\` \`kontrol\``)


  if(args[0] === 'kontrol') {

  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed()
                      .setColor('GREEN')
                      .setAuthor(message.guild.name, message.guild.iconURL())
                      .setDescription(`Bu sunucu için **Premium** sistemi **${açıkmı ? 'aktif' : 'kapalı'}**!`)
                      .setFooter(`Codare`)
                      .setTimestamp())
    } 

  
  
  if(args[0] === 'ver') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
  
  if(!client.guilds.cache.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
    
  data.set(`premium.${id}`, 'açık')
  message.channel.send(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** aktif edildi!`)
    
  let owner = client.guilds.cache.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli kişi **${client.guilds.cache.get(id).name}** isimli sunucun için premium'u aktif etti.
Doya doya kullan!`)
    
  }
  
  if(args[0] === 'al') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
    
  if(!client.guilds.cache.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(!açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif değil.`)
    
  data.delete(`premium.${id}`)
  message.channel.send(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** de-aktif edildi!`)
    
  let owner = client.guilds.cache.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli ki��i **${client.guilds.cache.get(id).name}** isimli sunucun için premium'u kapattı.`)
    
  }

  
  
  
  
};
module.exports.config = {
  name: "premium",
  aliases: []
}