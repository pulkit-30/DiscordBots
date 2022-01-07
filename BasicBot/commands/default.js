module.exports = {
  name: "default",
  description: "default command",
  execute(message, args) {
    message.channel.send(
      `Sorry ${message.author.username} \t 😔 \n**Command Not Found \t ❌ **`
    );
  },
};
