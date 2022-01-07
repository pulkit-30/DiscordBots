require("dotenv").config();
const Discord = require("discord.js");
const ReadCommandFiles = require("./utils/CommandFiles");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Discord.Collection();

const commandFiles = ReadCommandFiles();

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once("ready", () => console.log("Jazz is Online 🎷"));

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
    return;
  const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "ping") client.commands.get("ping").execute(message, args);
  else if (command === "help")
    client.commands.get("help").execute(message, args);
  else client.commands.get("default").execute(message, args);
});

//*  login with the TOKEN
client.login(process.env.TOKEN);
