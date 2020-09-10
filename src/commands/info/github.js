const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to Chilly\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setThumbnail('https://cdn.discordapp.com/attachments/748605999249621113/748697388339691550/chilly-profile_image-71507e8984473c5c-300x300.png')
      .setDescription(oneLine`
        Click [here](https://github.com/sabattle/CalypsoBot) to to visit my GitHub repository!
        Please support me by starring ⭐ the repo, and feel free to comment about issues or suggestions!
      `)
      .addField('Other Links',
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=704421143469359164&permissions=8&scope=bot) | ' +
        '[Support Server](https://discord.gg/czB9N6h)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
