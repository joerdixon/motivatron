const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vibe")
        .setDescription("Set the mood"),
    async execute(interaction) {
        await interaction.reply("stfu")
    }
}