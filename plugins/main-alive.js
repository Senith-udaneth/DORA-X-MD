const { lite } = require('../lite');
const os = require('os');
const { runtime } = require('../lib/functions');
const config = require('../settings');

lite({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check if bot is alive and running",
    category: "main",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        const heapUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
        const uptime = runtime(process.uptime());

        const caption = `
╭━━〔 👾 *${config.BOT_NAME} STATUS* 〕━━⬣
┃ 📍 *𝙱𝙾𝚃 𝙸𝚂 𝙰𝙲𝚃𝙸𝚅𝙴 & 𝙾𝙽𝙻𝙸𝙽𝙴!*
┃
┃ 👑 *𝙾𝚆𝙽𝙴𝚁:* ${config.OWNER_NAME}
┃ 🔖 *𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* ${config.version}
┃ 🛠️ *𝙿𝚁𝙴𝙵𝙸𝚇:* [ ${config.PREFIX} ]
┃ ⚙️ *𝙼𝙾𝙳𝙴:* [ ${config.MODE} ]
┃ 💾 *𝚁𝙰𝙼:* ${heapUsed}MB / ${totalMem}MB
┃ 🖥️ *𝙷𝙾𝚂𝚃:* ${os.hostname()}
┃ ⏱️ *𝚄𝙿𝚃𝙸𝙼𝙴:* ${uptime}
╰━━━━━━━━━━━━━━⬣
📝 *${config.DESCRIPTION}*
        `.trim();

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418166378841@newsletter',
                    newsletterName: '𝐃𝐎𝐑𝐀 𝐱 𝐌𝐃 𝐎𝐅𝐂 👾',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
