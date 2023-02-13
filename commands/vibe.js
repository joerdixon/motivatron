const { SlashCommandBuilder } = require("discord.js")

// The vibe command will play Roddy Rich - The Box lofi remix

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vibe")
        .setDescription("Set the mood"),
    async execute(interaction) {
        await interaction.reply("stfu")
    }
}