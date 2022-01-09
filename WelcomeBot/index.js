require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.once("ready", () => console.log("Merhba Bot is ready"));

client.on("guildMemberAdd", (guildMember) => {
  console.log(guildMember);
  guildMember.guild.channels.cache
    .find((name) => name.name === process.env.WELCOME_CHANNEL)
    .send(`Welcome <@${guildMember.author.id}> 🤗.`);
});

//*  login with the TOKEN
client.login(process.env.TOKEN);
