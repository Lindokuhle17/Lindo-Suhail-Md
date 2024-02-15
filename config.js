const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lindokuhle.ndlangamandla@gmail.com"
global.location="Pongola, KZN."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github=process.env.GITHUB|| "https://github.com/Lindokuhle17/Lindo-Suhail-Md";
global.gurl  =process.env.GURL  || "https://https://wa.me/message/MAD66BH7UVM6G1";
global.website=process.env.GURL || "https://https://wa.me/message/MAD66BH7UVM6G1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "0657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0657006860";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Prince Oracle",
  packname: process.env.PACK_NAME || "♥️",
    botname : process.env.BOT_NAME  || "Lindo",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Bot",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_32_02_15_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0d0UHhMclFGR1JPWjYvUmoveXI0d0lGRXp2Q3E2Ukd6MjNYeTc4REtsbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVjR1dRdHhxZ2o0a0FKZklOMFlSVUlHVTNNcTNjM1N5T0wrOGN0MWlwUTg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUpwV3VJR3hmbFlUQ2UrQUFvMDZoMFRXZkRpV040R2g2RXk1UnZkWktrTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdYWGZQZFV0SWFsR2JQeFVUZ3BvbTRqaHUvVk1FZ2FEeTRqL3cyYkFXVVU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUwrTXFrOU51Zmh0cDR0cTVsNEh3and2dkdRRndsQ2lJVHRRckhyMWNsST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIldGa3BEUmZrSHh0UTFSV2gwWDY3V3hiUVdzTS9ta21CYlp3cm9aVTJlWEE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ3QWhkNURweHNKUHhVMUdqWXpPWHpQcnpNT2NzZ0x4cjBDZnU1OThHa25vPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNW5vY1pRc1ZJRkQrbW02dHVmTDd0YVA2c3hiK2xMdXpjQi9naUhSZytERT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJMUnpMenNmOGU2Y25iWXNDbUxJS0wzTjRBcnVHa2tuNzNGY1hqTjlYLzFXc2l5N3ovbFZzRXR6dm9GYktNT2QyRTQ2empoaWIxU0hDNDdmQzNMMGZoQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjMsXCJhZHZTZWNyZXRLZXlcIjpcImttSUszY0o3Rko3UGw2N3ROT3p0ckxRcU5EODM0NkZoM2lHNXhGUGM2K1U9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNzY5ODQ5OTcyMUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIxN0VFNDlGNEY0MUNGMTE2QkNBRDJCQUVDQzI2RkQ3OFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA3OTkzMTUyfSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjI3Njk4NDk5NzIxQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBMzQyN0RBOEMxODQ4MjI4RDQxMkJDQzExQ0YyQzRDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDc5OTMxNTR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJscW1HUF9jN1NTVzhLTW8wLXZiaHZ3XCIsXCJwaG9uZUlkXCI6XCIxMTliMTNhMS1mOGYzLTQyNjQtODRiMi1lOWNhMTlhNmRlMjVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNjWUp0Sm9vakdBSi9tSm85TkozS3RBdEZjbz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZnVESHBhUzk2K0VRem9aencwM2NvNDNKTDhjPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPRGkwczRCRUxyUXQ2NEdHQkVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiUjlBTEY0d09Sb1VPRmQ2R1N5ZnhPNG9PWXdyd2lQZUw2SE5JKzdtb096TT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkpraEFidVVYeW5JdUNkSlliZ2dLR2xhd1pwSVpYbERhdVhNZ3QzVFMzMHZDWE4xVTVSbnU5OGtWSnJKQ0ZFN3RmZ3pvb0xnKzFNMmdpVExNVnpXaUJBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWG9BTTF4bWRjN2ZsSDNiN3pCeXJ4UC9lcVl3V05VOEpneVM3NHEwSk54Q3QrMStuRUZpNzc1Nk05RTNvUG4rcFZNQlV1ZFcwU1FZRm11Mm5WVURnaEE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI3Njk4NDk5NzIxOjEyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE1MDQxMjEwMzg0NDAyOjEyQGxpZFwiLFwibmFtZVwiOlwiTXVzaWMgbG92ZXLinKjimaXvuI/imaDvuI9cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNzY5ODQ5OTcyMToxMkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJVZlFDeGVNRGthRkRoWGVoa3NuOFR1S0RtTUs4SWozaStoelNQdTVxRHN6XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwNzk5MzE0OSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJUk1cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvc0M0MUVXdVUrclhoeUlLMWp3L01GaXZGc2VQOVVYNjhNZjJid1dGOWcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzMzM2OTQ0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA3NzYwNjYyOTcyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRllneHoxRUpxeEJCSVR3cTFLcmlSWG9UTG1aZmRuWXRoa2hGbGUvSk5FRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzMzNjk0NDAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzA3NzYxMDI1NzA3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRjUzdDNzdERIdTBIRk9BTEdQQXYwbXRWMW9lbTZxb0RNRmtTMkJLaENobz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzMzNjk0NDAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzA3NzYxMTI0ODg5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFIxZzhYSGJmUkdrdkZjajM3RUNvQ0NTYzA3UVVTY1VSeXhOVTUzZFkxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzMzNjk0NDAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIxNzA3NzYxMjU4NjY3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJNLmpzb24iOiAie1wia2V5RGF0YVwiOlwid0Jxa0Y3aEM5Qmk5S1lkTjJGQVBXSm45S0VmeTdQbk91cnJSYWdCOGVlRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzMzNjk0NDAsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc3NjIxMTMzMjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrM05oZFZzRTRCOWF6MjNMS3pXTFkyeW55UjFJVGF3QTJYYk00alB1Z2RRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzMzM2OTQ0MCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc3NjIxMjk5NjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvTXA1VnMrK1o5bk5ReUhHM2JYWUhFSGRjZk5YODNUV014OTZlS2RNeWQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzMzM2OTQ0MCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJQLmpzb24iOiAie1wia2V5RGF0YVwiOlwianR4MFhMQ01KZi9LOHRTMGFaMmhoYWhxZkxRRnVOWW5XQzFmQnhGWlpCQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzMzNjk0NDAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc3NjgxOTY4NzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6SkFiWk5FbkhSaEJIa1hwVzdadzhDbnJzRW5xZjFhMitnMGVHVHM5c01rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzMzM2OTQ0MCxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzc3MDYwNjIzOFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
