


const { isJidGroup } = require('@whiskeysockets/baileys');
const config = require('../settings');

const getContextInfo = (m) => {
    return {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363418166378841@newsletter',
            newsletterName: '𝐃𝐎𝐑𝐀 𝐱 𝐌𝐃 𝐎𝐅𝐂 👾',
            serverMessageId: 143,
        },
    };
};

const ppUrls = [
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
];

const GroupEvents = async (conn, update) => {
    try {
        const isGroup = isJidGroup(update.id);
        if (!isGroup) return;

        const metadata = await conn.groupMetadata(update.id);
        const participants = update.participants;
        const desc = metadata.desc || "No Description";
        const groupMembersCount = metadata.participants.length;

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(update.id, 'image');
        } catch {
            ppUrl = ppUrls[Math.floor(Math.random() * ppUrls.length)];
        }

        for (const num of participants) {
            const userName = num.split("@")[0];
            const timestamp = new Date().toLocaleString();

            if (update.action === "add" && config.WELCOME === "true") {
                const WelcomeText = `✨ 𝙷𝙴𝚈 @${userName}!

𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 *${metadata.subject}* 🏡  
𝚈𝙾𝚄’𝚁𝙴 𝙼𝙴𝙼𝙱𝙴𝚁 #${groupMembersCount} — 𝙶𝙻𝙰𝙳 𝚈𝙾𝚄 𝙹𝙾𝙸𝙽𝙴𝙳!  

🕒 *𝙹𝙾𝙸𝙽𝙴𝙳 𝙰𝚃:* ${timestamp}  
📌 *𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾:*  
${desc}

𝙼𝙰𝙺𝙴 𝚈𝙾𝚄𝚁𝚂𝙴𝙻𝙵 𝙰𝚃 𝙷𝙾𝙼𝙴 𝙰𝙽𝙳 𝙵𝙾𝙻𝙻𝙾𝚆 𝚃𝙷𝙴 𝚁𝚄𝙻𝙴𝚂 𝚃𝙾 𝙺𝙴𝙴𝙿 𝚃𝙷𝙴 𝚅𝙸𝙱𝙴 𝙲𝙾𝙾𝙻!  
🔧 *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ${config.BOT_NAME}*`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: WelcomeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "remove" && config.WELCOME === "true") {
                const GoodbyeText = `😔 @${userName} 𝙷𝙰𝚂 𝙻𝙴𝙵𝚃 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿.

🕒 *𝙻𝙴𝙵𝚃 𝙰𝚃:* ${timestamp}  
👥 *𝚁𝙴𝙼𝙰𝙸𝙽𝙸𝙽𝙶 𝙼𝙴𝙼𝙱𝙴𝚁𝚂:* ${groupMembersCount}  

𝚆𝙴 𝚆𝙸𝚂𝙷 𝚈𝙾𝚄 𝙰𝙻𝙻 𝚃𝙷𝙴 𝙱𝙴𝚂𝚃!  
👋 *${config.BOT_NAME} 𝚂𝙰𝚈𝚂 𝙶𝙾𝙾𝙳𝙱𝚈𝙴.*`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: GoodbyeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "demote" && config.ADMIN_EVENTS === "true") {
                const demoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `⚠️ *𝙰𝙳𝙼𝙸𝙽 𝙽𝙾𝚃𝙸𝙲𝙴*

@${demoter} 𝙷𝙰𝚂 𝚁𝙴𝙼𝙾𝚅𝙴𝚁 @${userName} 𝙵𝚁𝙾𝙼 𝙰𝙳𝙼𝙸𝙽 𝚂𝚃𝙰𝚃𝚄𝚂 🔻  

🕒 *𝚃𝙸𝙼𝙴:* ${timestamp}  
📢 *𝙶𝚁𝙾𝚄𝙿:* ${metadata.subject}`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });

            } else if (update.action === "promote" && config.ADMIN_EVENTS === "true") {
                const promoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `🎉 *𝙰𝙳𝙼𝙸𝙽 𝙽𝙾𝚃𝙸𝙲𝙴*

@${promoter} 𝙷𝙰𝚂 𝙿𝚁𝙾𝙼𝙾𝚃𝙴𝙳 @${userName} 𝚃𝙾 𝙰𝙳𝙼𝙸𝙽! 🛡️  

🕒 *𝚃𝙸𝙼𝙴:* ${timestamp}  
📢 *𝙶𝚁𝙾𝚄𝙿:* ${metadata.subject}  

𝙶𝙸𝚅𝙴 𝙰 𝚆𝙰𝚁𝙼 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙾𝚄𝚁 𝙽𝙴𝚆 𝙻𝙴𝙰𝙳𝙴𝚁!`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });
            }
        }
    } catch (err) {
        console.error('Group event error:', err);
    }
};

module.exports = GroupEvents;
