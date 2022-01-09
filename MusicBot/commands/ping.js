module.exports = {
  name: "ping",
  description: "This is a Ping Command >>",
  execute(message, args) {
    message.channel.send(`Pong 🛰️`);
  },
};
