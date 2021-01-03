const Discord = require('discord.js');
const client = new Discord.Client();
const botname = "BOTNAME"
const token = 'TOKEN'

client.once('ready', () => {
   console.log('[INFO] '+botname+' has started');
   client.user.setActivity("Sleep for now..")
});

client.login(token);

client.on("message", message => {
    switch (message.content)
    {
        case 'Hey':
            if(message.author.bot) return;
            message.channel.send("Hi ! :smile:")
            break;
        case 'Hi':
            if(message.author.bot) return;
            message.channel.send("Hi ! :smile:")
            break;
        case 'Salut':
            if(message.author.bot) return;
            message.channel.send("Hi ! :smile:")
            break;
        case 'Bonjour':
            if(message.author.bot) return;
            message.channel.send("Hi ! :smile:")
            break;
        case 'Bonsoir':
            if(message.author.bot) return;
            message.channel.send("Hi ! :smile:")
            break;
        case ';Ping':
            if(message.author.bot) return;
            message.channel.send("Pong. :ping_pong:")
            break;
        case ';Version':
            if(!message.member.hasPermission(['ADMINISTRATOR'])){message.author.send("You cannot use this command."); return;}
            message.channel.send(">>> Discord.Js Version : " + Discord.version.toString())
            console.log('[REQUEST] '+message.author.username.toString()+' request the version of Discord.js with ";Version".');
            break;


    if (message.content.startsWith(";kick")) {

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(`:wave: ${member.displayName} has been kicked`);
        }).catch(() => {
            if (!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("You cannot kick members");
            } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("You cannot kick this member");
            }
        })
    }
}})


