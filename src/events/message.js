const fs = require('fs')
module.exports = message => {
    const args = message.content.split(' ');
    const cmd = args.shift().slice(1).toLowerCase();
    // Check if prefix matches
    if(!message.content.startsWith(';')) return;

    // Check if command exists
    if (!fs.existsSync('./commands/'+cmd+'.js')) {
        message.delete(200);
        message.reply('that is not a command!').then(msg => {
            msg.delete(2500);
        })
        return;
    }

    // Declare sent variables
    const client = message.client;

    let file = require(`../commands/${cmd}`);

    file.run(client, message, args)

}