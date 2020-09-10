const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Chilly\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://cdn.discordapp.com/attachments/748605999249621113/748697388339691550/chilly-profile_image-71507e8984473c5c-300x300.png')
      .setDescription('Click [here](https://discord.gg/czB9N6h) to join the Chilly Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=704421143469359164&permissions=8&scope=bot) | ' +
        '[Repository](https://github.com/sabattle/CalypsoBot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
