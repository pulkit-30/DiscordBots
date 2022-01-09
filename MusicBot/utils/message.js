client.on("messageCreate", (message) => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
    return;
  const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "ping") client.commands.get("ping").execute(message, args);
  else if (command === "help")
    client.commands.get("help").execute(message, args);
  else if (command === "play")
    client.commands.get("play").execute(message, args);
  else if (command === "leave")
    client.commands.get("stop").execute(message, args);
  else if (command === "skip")
    client.commands.get("skip").execute(message, args);
  else client.commands.get("default").execute(message, args);
});
