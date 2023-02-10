// Import the command builder.
const { SlashCommandBuilder } = require('discord.js');

// Export the ping command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('bing')
		.setDescription('Replies with Bong!'),
	async execute(interaction) {
		await interaction.reply('Bong!');
	},
};