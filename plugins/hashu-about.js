const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["dinithi","whois"], 
    react: "💬",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*🌺 𝙷𝙰𝚂𝙷𝚄𝚉𝚉 𝙼𝙳 🌺*

*╭─────❒*
*┃* *👋 нєℓℓσ ${pushname}*
*╰───────────❒*

╭─ * 𝙷𝙰𝚂𝙷𝙸𝚉𝚉 ᴍᴅ ᴀʙᴏᴜᴛ ៚*
┃🌸╭────❥
┃🌸│  *⛬ ᴡᴇʟᴄᴏᴍᴇ ᴛʜᴇ ᴍʏ ᴀʙᴏᴜᴛ* 
┃🌸│  *⛬ ʙᴏᴛ ɴᴀᴍᴇ : 𝙷𝙰𝚂𝙷𝚄𝚉𝚉 ᴍᴅ*  
┃🌸│  *⛬ ᴏᴡɴᴇʀ : 𝙳𝙸𝙽𝙸𝚃𝙷𝙸*
┃🌸│  *⛬ ᴀɢᴇ : 19 ʏᴇᴀʀ* 
┃🌸│  *⛬ ᴄɪᴛʏ : 𝙱𝚄𝚃𝙷𝚃𝙷𝙰𝙻𝙰*  
┃🌸│  *⛬ ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*  
┃🌸╰────────❥
╰───────────────────────៚
*╭─────❒||🙊💗🌼. ||*
*┃* *𝚂𝙿𝙴𝙲𝙸𝙰𝙻 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁*
*╰───────────❒*

╭── *💗 ᴛʜᴀɴᴋꜱ ᴛᴏ ᴍʏ ꜰʀɪᴇɴᴅᴅ 💗៚*
┃🌸╭────❥
┃🌸│  *🧑‍💻 ʀᴇᴀʟ ᴅᴇxᴛᴇʀꪶ* 
┃🌸│  *🧑‍💻 ʀꪶᴇᴀʟ 𝐃ᴏʀᴀꪶ*
┃🌸│  *🧑‍💻 ʀᴇᴀʟ ᴄʏʙᴇʀ ᴅᴇxᴛᴇʀꪶ*  
┃🌸│  *🧑‍💻 ʀᴇᴀʟ ᴋɪɴɢ ʀᴀᴠɪꪶ*  
┃🌸╰────────❥
╰───────────────────────៚


> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪɴɪᴛʜɪ 🌸`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/5ztych.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363418166378841@newsletter',
      newsletterName: '𝐃𝐎𝐑𝐀 𝐱 𝐌𝐃 𝐎𝐅𝐂 👾',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
