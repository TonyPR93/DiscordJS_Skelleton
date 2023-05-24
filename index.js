const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;
  
  if (message.content === "ping") {
    message.reply("Pong !");
  }
});

client.login("YOUR_BOT_TOKEN");
