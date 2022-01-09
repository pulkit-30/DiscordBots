module.exports = {
  name: "stop",

  execute(message, args) {
    const queue = player.getQueue(message.guild.id);

    if (!queue || !queue.playing)
      return message.channel.send(
        `No music currently playing ${message.author}... try again ? ❌`
      );

    queue.destroy();

    message.channel.send(
      `Music stopped into this server, see you next time ✅`
    );
  },
};
