const Discord = require("discord.js");
const discordTranscripts = require('discord-html-transcripts');
// or (if using typescript) import * as discordTranscripts from 'discord-html-transcripts';
const db = require("quick.db")

module.exports = {
    name: "transc", 
    aliases: ["tc"], 

    run: async(client, message, args) => {

let usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let motivo = args.slice(2).join(" ");
      
const channel = message.channel;
      
      let canal = message.guild.channels.cache.get(db.get(`tckt_${message.guild.id}`));
      if (!canal) {
        message.reply({
          embeds: [
            new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`O canal de Transcript ainda não está configurado!\nUse .ticketch #canal`)
          ]
        });
      } else {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let motivo = args[1];

            if (!motivo) motivo = "Não definido.";

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`.tc @membro [motivo]\``);
            } else {
const attachment = await discordTranscripts.createTranscript(channel);

const autor = message.author.tag
        
canal.send({ content: `O ticket de ${usuario} foi fechado pelo staff ${message.author}.\nMotivo: ${motivo}`, files: [attachment]
});

  message.channel.send('Deletando em 5 segundos.....')
        setTimeout(() => {
            message.channel.delete()
        }, 5000)
      }
    }
}
}