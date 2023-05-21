import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['0776381721', 'Sashika', true],
  ['077946942', '사시그', true], 
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
global.botname = '𝗦𝗮𝘀𝗵𝗶𝗸𝗮 202𝗞♲︎︎︎'
global.premium = 'true'
global.packname = '𝐒𝐚𝐬𝐡𝐢𝐤𝐚✌︎✈︎' 
global.author = '@𝑠𝑎𝑠ℎ𝑖𝑘𝑎 𝑠𝑒𝑛𝑎𝑟𝑎𝑡ℎ ♫︎ ✔︎' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/sashika_senarath' 
global.dygp = 'https://chat.whatsapp.com/FY56bK3NraWLc3vUlRFnYi'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Sl sashi bro'
global.fgpyp = 'https://youtube.com/@Sl sashi bro'
global.fglog = 'https://github.com/Sashika123/GURU-BOT' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*⌛ _Charging..._*𝙎𝙖𝙨𝙝𝙞𝙠𝙖 202Ⓚ︎ ♪♪♪*'
global.rwait = '𝗐𝖺𝗂𝗍...⌛'
global.dmoji = '🤭'
global.done = 'හරි ✅'
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
