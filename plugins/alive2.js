const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive2",
    alias: ["status", "aa", "queen"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👑",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*හෙලොවු මම ක්‍රියාත්මකව සිටිමිꪶ මාව ස්වයංක්‍රියද බැලු ඔබට ස්තිතියි...💗*

*ඔබට මගෙන් කුමන දෙයක්ද අවශ්‍යද ඔබට තවත් විස්තර දැන ගැනිම සදහා පහත කමාන්ඩ් බාවිතා කරන්න ඔබට සුබ දවසක්  𝐈 𝐀ᴍ  𝐇ᴀꜱʜᴜᴢᴢ  𝐌ᴅ  𝐖ʜᴀᴛꜱᴀᴘᴘ  𝐁ᴏᴛ...🧚‍♀️💗*

*⎙─➤ .ᴍᴇɴᴜ*
*⎙─➤ .ᴀʟɪᴠᴇ*
*⎙─➤ .ᴘɪɴɢ*
*⎙─➤ .ꜱʏꜱᴛᴇᴍ*


> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜᴀꜱʜᴜᴢᴢ 🧸`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/53htb4.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418166378841@newsletterr',
                    newsletterName: '𝐃𝐎𝐑𝐀 𝐱 𝐌𝐃 𝐎𝐅𝐂 👾',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
