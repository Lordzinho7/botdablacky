const Discord = require("discord.js")

module.exports = {
    name: "unlock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {
let unlockemb = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**\`🏓\` Canal destrancado!\nUse \`.lock\` para trancar.**`);

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`Você não possui a permissão \`Gerenciar Canais\` para poder utilizar este comando.`)
        } else {
            
            message.reply(unlockemb).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true }).catch(e => {
                console.log(e)
                msg.edit(`❌ Ops, algo deu errado ao tentar destrancar este chat.`)
            })
        })

            }
        }        
}