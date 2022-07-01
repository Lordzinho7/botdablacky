const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "ticketch", // Coloque o nome do comando do arquivo
    aliases: ["savechannel"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`Você não possui a permissão de \`Gerenciar Canais\`.`)
        } else {
            let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
            if (!canal) {
                message.reply({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`.transcript [canal]\``)
                ] })
            } else if (canal) {
                if (canal.type !== "GUILD_TEXT") {
                    message.reply(`Mencione apenas canais de texto!`)
                } else {
                    message.reply(`\\✅ O canal de texto ${canal} foi configurado com sucesso!`).then(m => {
                        db.set(`tckt_${message.guild.id}`, canal.id)
                        canal.send(`Este chat foi configurado para receber tickets salvos!`).then(msg => {
                            msg.pin()
                        })
                    })
                }
            }
        }

       
        
    }
      }