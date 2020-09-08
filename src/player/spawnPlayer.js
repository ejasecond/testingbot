const { Player } = require('@tetracyl/erela.js');

module.exports = async (client, message) => {
        const player = new Player({
            guild: message.guild,
            voiceChannel: message.member.voice.channel,
            textChannel: message.channel,
        });
 
        // Connect to the voice channel.
    player.twentyFourSeven = false;
    player.previous = null;
    player.connect();

    return player;
};