const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("data")
    .setDescription("See your stats"),
    async execute(interaction) {
        await interaction.reply("test")
    }
};