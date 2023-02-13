const {SlashCommandBuilder} = require("discord.js");

// The data command will show the user extensive information about their server profile.

module.exports = {
    data: new SlashCommandBuilder()
    .setName("data")
    .setDescription("See your stats"),
    async execute(interaction) {
        await interaction.reply("test")
    }
};