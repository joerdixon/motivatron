// Import the command builder.
const { SlashCommandBuilder } = require('discord.js');

// Export the ping command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};