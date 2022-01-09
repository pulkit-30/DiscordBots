require("dotenv").config();
const { Player } = require("discord-player");
const { Client, Intents, Collection } = require("discord.js");
const ReadCommandFiles = require("./utils/CommandFiles");
global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
  disableMentions: "everyone",
});
client.config = require("./utils/config");
global.player = new Player(client, client.config.opt.discordPlayer);

client.commands = new Collection();

const commandFiles = ReadCommandFiles();

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

require("./utils/ready");
require("./utils/message");
require("./player");
//*  login with the TOKEN
client.login(process.env.TOKEN);
