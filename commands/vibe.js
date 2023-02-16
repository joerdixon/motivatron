const { SlashCommandBuilder } = require("discord.js")
const ytdl = require("ytdl-core");

const queue = new Map();



// The vibe command will play Roddy Rich - The Box lofi remix

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vibe")
        .setDescription("Set the mood"),
    async execute(interaction) {
        await interaction.reply("stfu")
    }
}