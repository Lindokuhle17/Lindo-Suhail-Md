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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/Lindokuhle17/Lindo-Suhail-Md/blob/main/MrHacker.png" ; // SET LOGO FOR IMAGE 



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
    botname : process.env.BOT_NAME  || "Lindokuhle Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_09_02_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicU5mQUIxR3pyQzRGR0VJVnRrajJwQ2dleWZMa2pxVTBDQTd4cW1TUzcwND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImkvTEdrVzhub1JOUVZoaEkvT0FMcXU1d3V2c2d5a0toclF0ZFdOcmxKZ009XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUF3Zy9BOEhjOStOR1hnQUhIbjRqZFppanFHV05kNFZsckg1MGlmdDhGST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVXbHNkRXl3MnB2VDNwOWZkMDEvRU9lTFJnNmt3b2tFTURXSEVSME9Sa2s9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUx3NHBScWZXUGN4V3lvbDA4cGptbVBOSHVsc2diSitpMkZUTjZxQThYbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVDWEtDbm01R3F1RHdqWDhZQStabytPbitFZHBnN05nSjNSZW5vVVRlUXc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJZSkU0MGVrMGdycjJMbDhNR21ydnlBVXU3aU1ybkduYmM2MHppZlJpVDJRPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidEdGbVFpaVBsbUV6Y2tlKzN1aHRXOWZwWXV1LzFiNDVKdEVmU2Naem5scz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwSkZiejZkUlhtN2VYajRRZzlyL2xwUVdkQTBWMVp3bTIrY2VDSlZ5WCtveUc0bGFJeHJwWWdkR3hwSEZ1dFNKZzZpbUo0R25wdWNJazVVcFVlQ0Vodz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6ODcsXCJhZHZTZWNyZXRLZXlcIjpcIklJSENQSE55UzFWZkdIcVZxbDBhSGptOVcvZHhLbVBrSEZEYS83TllTQk09XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJwUDYxSi1uOFNCbTVZbjEzUjhuZWhBXCIsXCJwaG9uZUlkXCI6XCI2NTI1OWI3OS1lOTQzLTQ5MWUtOTEwYy1kMDI2ODk5M2M1YTdcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFOWUlWdTZwWXRKZ0xkL1Q4bEM1VDNIMjRITT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSXh4bHJERURJTVdvMXRqYTh1R1l4cmd6Q1RBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNVFlnekFRa2RyM3JnWVlDU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRG81OGh1dC9SeGptRHBpZmZrZ3dNSmRiRzRJMnlNdDlmRld0TWpFRjZsST1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInlQR0tpNXB6SDBaSEFVUDVFeCtITzBNZXJDdTJJT2l3NnJnTFk5Q0JSVTBlLzNZcENnRE1SMHZCZk9pRTd5ZUkzd0I3cHd1UjJwTC8zalZ1QkpYQ0JnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiMnZBQ2VYSjJ5QS9zTEN0clNQZUNFbTFoUy9YK3VxdUoyWTk3cHU4MnhCZm5pYy84SUllZTVUY0p3TnpDQWFsdEZzOWgxdThuM3JheUFIM2hBZENSaXc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI3NjU3MDA2ODYwOjY5QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJMaW5kb2t1aGxlIERlc2lnbnNcIixcImxpZFwiOlwiNzQ4Nzg1NjA1NTEwMzY6NjlAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjc2NTcwMDY4NjA6NjlAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUTZPZklicmYwY1k1ZzZZbjM1SU1EQ1hXeHVDTnNqTGZYeFZyVEl4QmVwU1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDkwNDI5NjZ9Igp9",  // PUT SESSION ID HERE 
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
 
