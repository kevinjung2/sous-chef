import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
] });

client.once(Events.ClientReady, (res) => {
	console.log('ready, logged in as: ' + res.user.tag);
});

client.on(Events.InteractionCreate, interaction => {
	switch (interaction) {
	case 'help':
		break;
	case 'ban':
		break;
	case 'timeout':
		break;
	case 'poll':
		break;
	case 'recipe':
		break;
	default:
		break;
	}
});

client.login(process.env.TOKEN);