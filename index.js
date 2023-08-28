const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const { Client, GatewayIntentBits, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/examplewithembed', (req, res) => {
    if (!req.body.user) {
        res.status(400).send('error: all params not set');
    };
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    client.users.send(req.body.user, { embeds: [exampleEmbed] });
    res.status(200).send("success");
})

app.post('/examplewithmessage', (req, res) => {
    if (!req.body.user) {
        res.status(400).send('error: all params not set');
    };

    const examplemessage = new EmbedBuilder()
        .setColor(0x04BA00)
        .setTitle('A example message')
        .setDescription('This is a example message')
        .setTimestamp()

    client.users.send(req.body.user, { embeds: [examplemessage] });
    res.status(200).send("success");
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activities: [{ name: 'See a requests' }], status: 'watching' });
});


client.login(process.env.BOT_TOKEN)
app.listen(process.env.LISTEN_PORT, console.log("Listen Sever Started on - localhost:" + process.env.LISTEN_PORT));