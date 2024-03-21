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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/johannesburg";
global.github=process.env.GITHUB|| "https://github.com/Lindokuhle17/Lindo-Suhail-Md";
global.gurl  =process.env.GURL  || "https://https://wa.me/message/MAD66BH7UVM6G1";
global.website=process.env.GURL || "https://https://wa.me/message/MAD66BH7UVM6G1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" ; // SET LOGO FOR IMAGE 



global.devs = "0657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27657006860";




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
  caption : process.env.CAPTION || "©LindokuhleBot" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Lindokuhle Bot",
  packname: process.env.PACK_NAME || "♥️",
    botname : process.env.BOT_NAME  || "Lindokuhle Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_23_03_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOE9vdUswalZuczhZY0xzdzZlL0lGeVlMRHZRZjNLRHVvU2dnc29aMVVrMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZDSHFyaXBlYm1LekV1YlpqTEIvNTVRYWE3STVha0JmZXBEOFBLZ0M0R0E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUNWNlpicHhQVk1zcEVOMjZtbWs3MWpBUlFNM0NrNkN0TlJTY3N1bHJuOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBCS1RkNVl2WEpraVpJb0Y2OEhSVmZXYzNXQnlDU3FuQjJLZTN0ZWJhQnc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUdxdCtsdHVXNVN0TXppSU9GQ0VhL1FKWXY3VDFIVTVEakN6aEVGeHgzTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1meVNkMHk0RWFETFdkV3c1QnVJbWloSG5RVCt0UENpUXJZcWp5dmUzVjQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtQjA3RHJoL1pmenpQRnVqT1p6OG9JTVhoR2JrUWNaQ1pKbEorUnFReFZVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL0Nwb2p6LzdjSDBkbENtc3JxOG9WWnBHVkhRRXF3MWdHVUhBSzg3Y2ZTZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJkUWxRT2d6VTExZGNjOWtVbnVncWFGRHhOUVEwNjRNMG1tTkE5NUtGa3VQaFBBRHpORmtFUVpYZVZlMm5yRzAyYkdTOU9KdUdDeis0Nkd2N0JtMmNBdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTMyLFwiYWR2U2VjcmV0S2V5XCI6XCJ2aTlIRWlCNUxhVkVhRHJQM1F1MDhHQ2kvZERnZUpVbXd6bzkvUVA5elFvPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwicE41MUw1VkxTOU95WFNMZ2gteF9Od1wiLFwicGhvbmVJZFwiOlwiZDczZWIzYzEtYTllYi00Mzk2LTg1YjItMzU5ZmFmZTE4NDgxXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJkWUVoMDZGYXdwaS9SSG4vWWkxV3FuenNUY0k9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZMc2E0cjFReHp0VlFDNDZCRFcxN2hVeEMxMD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTVRZZ3pBUWdmbnZyd1lZQ3lBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJOS3psWDBGS05qbjYyQVNqTmFFWkMzVVRNbm1RTUFLOCt6RjRWSXFJQWx3S0RkVmVVUlQ1QlpzNDhMckYvVUFYTmlzY1c2SkozTEtHVUVwSXRCODFBQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIklIUGxWQmxsUndkb3BlV2l6Q08yakhsc1RXNGRnNnA1aWwxeHliNFk0c2JjSzBLS3ptQ0tUamNzSWUyMzNHKzh5S2RaWDJkNVFNSlZDajZ4SWhaTkN3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNzY1NzAwNjg2MDo3MUBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTGluZG9rdWhsZSBEZXNpZ25zXCIsXCJsaWRcIjpcIjc0ODc4NTYwNTUxMDM2OjcxQGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI3NjU3MDA2ODYwOjcxQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlE2T2ZJYnJmMGNZNWc2WW4zNUlNRENYV3h1Q05zakxmWHhWclRJeEJlcFNcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExMDEyOTk3fSIKfQ==",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
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
 
