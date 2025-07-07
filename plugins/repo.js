const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const config = require('../settings');
const { lite } = require('../lite');

lite({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about this GitHub repository.",
    react: "📂",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/XdKing2/LITE-XD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data = await res.json();

        const caption = `
╭━━〔 🔎 *𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐘 𝐈𝐍𝐅𝐎* 〕━━⬣
┃ 📦 *𝙱𝙾𝚃 𝙽𝙰𝙼𝙴:* ${data.name}
┃ 👑 *𝙾𝚆𝙽𝙴𝚁:* ${data.owner.login}
┃ ⭐ *𝚂𝚃𝙰𝚁𝚂:* ${data.stargazers_count}
┃ 🍴 *𝙵𝙾𝚁𝙺𝚂:* ${data.forks_count}
┃ 🔗 *𝙻𝙸𝙽𝙺:* ${data.html_url}
┃ 📝 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽:* ${data.description || 'No description'}
╰━━━━━━━━━━━━━━━━━━━━⬣
✨ *𝙳𝙾𝙽'𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 ★ 𝙰𝙽𝙳 𝙵𝙾𝚁𝙺!*
🔧 ${config.DESCRIPTION}
        `.trim();

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363418166378841@newsletter',
                newsletterName: '𝐃𝐎𝐑𝐀 𝐱 𝐌𝐃 𝐎𝐅𝐂 👾',
                serverMessageId: 143
            }
        };

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption,
            contextInfo
        }, { quoted: mek });

        const audioPath = path.join(__dirname, '../all/menu.m4a');
        await conn.sendMessage(from, {
            audio: fs.readFileSync(audioPath),
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo Command Error:", error);
        reply("❌ *Failed to fetch repository info.*\nPlease try again later.");
    }
});
