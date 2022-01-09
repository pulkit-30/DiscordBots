const fs = require("fs");
const ReadCommandFiles = () => {
  const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));
  return commandFiles;
};

module.exports = ReadCommandFiles;
