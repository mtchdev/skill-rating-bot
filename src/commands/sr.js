exports.run = function(client, message, args){
    
    const overstat = require('overstat')
 
    const ow = overstat()

    let btag = args[0].replace('#', '-');
    
    message.channel.send(`Finding current SR for **${btag.replace('-', '#')}**...`).then(msg => {
        ow.playerStats(btag).then(player => {
            msg.delete();
            if(isNaN(player.stats.competitiveRank)){
                message.reply('that BattleTag does not exist **OR** the player has not completed their placement matches yet.');
                return;
            }
            message.channel.send(`**${player.name.replace('-', '#')}**: ${player.stats.competitiveRank} SR`);
        })
    })

}