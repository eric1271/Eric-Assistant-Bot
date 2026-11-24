const {
  Client,
  GatewayIntentBits,
  Events
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(🤖 ${readyClient.user.tag} is online!);

  client.user.setActivity("Over Eric's Server", {
    type: 3
  });
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply({
      content: 'Pong! 🏓 Eric\'s Assistant is online!',
      ephemeral: true
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
