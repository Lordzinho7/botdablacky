const Discord = require("discord.js")

module.exports = {
    name: "lock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {
 
let lockemb = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**\`🏓\` Canal trancado!\nUse \`.unlock\` para destrancar.**`);

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`Você não possui a permissão \`Gerenciar Canais\` para poder utilizar este comando.`)
        } else {
            
            message.reply(lockemb).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false }).catch(e => {
                console.log(e)
                msg.edit(`❌ Ops, algo deu errado ao tentar trancar este chat.`)
            })
        })

            }
        }        
}