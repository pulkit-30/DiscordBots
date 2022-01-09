const ReadCommandFiles = require("../utils/CommandFiles");

module.exports = {
  name: "help",
  description: "This is a help Command >>",
  execute(message, args) {
    const SendMessage =
      " \n**Jazz 🎷 Help 🙌 \n*' use prefix  ` - `  to interact with JAZZ bot'*  \n```1. -help : for help menu\n2. -ping : for ping-pong```**";
    message.channel.send(SendMessage);
  },
};
