const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

  name: "ticket",

  run: async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`Apenas membros com a permissão de \`ADMINISTRADOR\`, poderão utilizar este comando.`);

    message.delete();

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**Crie um ticket selecionando uma categoria abaixo:**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }));


    let painel = new MessageActionRow().addComponents(new MessageSelectMenu()
      .setCustomId('menu')
      .setPlaceholder('Clique aqui.') // Mensagem estampada
      .addOptions([
        {
          label: 'Naruto',
          description: '',
          emoji: '<:9Kurama:852905192038596628>',
          value: 'nc',
        },
        {
          label: 'Dragon Ball',
          description: '',
          emoji: '<:Esfera4:872159465279979560>',
          value: 'dbc',
        },
        {
          label: 'Compras',
          description: '',
          emoji: '<a:AllianceGIF:837874261543747626>',
          value: 'compras',
        },
        {
          label: 'Bugs',
          description: '',
          emoji: '<:bug:992206249238200350>',
          value: 'bugs',
        }
      ])

    );


    const nccargo = `<@&855649239396777984>`
    const dbccargo = `<@&936127989559742464>`
    const coord = `<@&836363332533354577>`
    const ajudante = `<@&836363335502921759>`
    const moderador = `<@&836363335502921759>`


    message.channel.send({ embeds: [embed], components: [painel] }).then(msg => {


      const filtro = (interaction) =>
        interaction.isSelectMenu()

      const coletor = msg.createMessageComponentCollector({
        filtro
      });


      coletor.on('collect', async (collected) => {

        let ticket = collected.values[0]
        collected.deferUpdate()


        if (ticket === "nc") {

          let embed_nc = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<:9Kurama:852905192038596628> Olá ${collected.user}, seu ticket foi criado!**`);

          message.guild.channels.create(`nc-${collected.user.tag}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
              },
              {
                id: collected.user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
              }
            ]
          })

            .then(async (chat_tckt) => {

              chat_tckt.send({ contnt: `${collected.user} ${nccargo}`, embeds: [embed_nc] }).then(msg => msg.pin());

            });
        }



        if (ticket === "dbc") {

          let embed_dbc = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<:Esfera4:872159465279979560> Olá ${collected.user}, seu ticket foi criado!**`);

          message.guild.channels.create(`dbc-${collected.user.tag}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
              },
              {
                id: collected.user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
              }
            ]
          })

            .then(async (chat_tckt) => {

              chat_tckt.send({ content: `${collected.user} ${dbccargo}`, embeds: [embed_dbc] }).then(msg => msg.pin());

            });

        }



        if (ticket === "compras") {

          let embed_compras = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<a:AllianceGIF:837874261543747626> Olá ${collected.user}, seu ticket foi criado!.**`);

          message.guild.channels.create(`sell-${collected.user.tag}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
              },
              {
                id: collected.user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
              }
            ]
          }).then(async (chat_tckt) => {

            chat_tckt.send({ content: `${collected.user} ${ajudante}`, embeds: [embed_compras] }).then(msg => msg.pin());

          });

        }

        if (ticket === "bugs") {

          let embed_bugs = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<:Esfera4:872159465279979560> Olá ${collected.user}, seu ticket foi criado!**`);

          message.guild.channels.create(`${collected.user.tag}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
              },
              {
                id: collected.user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
              }
            ]
          }).then(async (chat_tckt) => {

            chat_tckt.send({ content: `${collected.user} ${coord}`, embeds: [embed_bugs] }).then(msg => msg.pin());

          });

        }



      })


    });



  }
}