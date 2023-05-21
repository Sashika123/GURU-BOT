import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['0776381721', '𝗦𝗮𝘀𝗵𝗶𝗸𝗮 ㋛︎♫︎', true],
  ['0779465942', '𝗦𝗮𝘀𝗵𝗶𝗸𝗮...', true], 
  [''] 
] //Number of owners

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝐒𝐒𝐁 𝐁𝐨𝐓 202𝐤 ♫︎.'
global.premium = '𝗦𝗮𝘀𝗵𝗶𝗸𝗮 𝘀𝗲𝗻𝗮𝗿𝗮𝘁𝗵☯︎✈︎'
global.packname = '𝚜𝚊𝚜𝚑𝚒𝚔𝚊 𝚜𝚎𝚗𝚊𝚛𝚊𝚝𝚑✌︎✍︎' 
global.author = '@𝐒𝐚𝐬𝐡𝐢𝐤𝐚 ♪♪♪' 
global.igfg = '▢ Follow' 
global.dygp = 'Hey,

WhatsApp Business is an app built for small business owners. With the app, you can create a business profile and easily connect with customers.

Get it for free at https://www.whatsapp.com/business/'
global.fgsc = 'https://github.com/Sashika123/GURU-BOT' 
global.fgyt = 'https://www.whatsapp.com/business/'
global.fgpyp = 'https://github.com/Sashika123/GURU-BOT'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*⌛ _Charging..._*\sashika ✔︎✔︎✔︎*'
global.rwait = '⌛사시그'
global.dmoji = '🤭'
global.done = 'done✅'
global.error = 'කිසියම් දෝෂයක් සිදු වී ඇත😐❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
