const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Chilly to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://cdn.discordapp.com/attachments/748605999249621113/748697388339691550/chilly-profile_image-71507e8984473c5c-300x300.png')
      .setDescription(oneLine`
        Click [here](https://discord.com/api/oauth2/authorize?client_id=704421143469359164&permissions=8&scope=bot)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/czB9N6h) | ' +
        '[Repository](https://github.com/sabattle/CalypsoBot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
