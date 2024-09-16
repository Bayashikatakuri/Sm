//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtWUHJ1TmQxTHBMNXpLTzRFRjI5WlNHZ0ZQVzd5WU9DZmlENWpFd3YyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWgrRnYzOTFWM2lvNzQwOVJBNlpaY3UvLzJVbWw0NUpLOUNrZ1d5M3h3Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUEttaGoxTGZkbXkyQVZ1S1B0OXRWem9MS0xHWHdoSmxDbC92dURieDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1NTM0MTVNdjlNbjROTkh5RXcyZDlvTUdUQk14dkZtTUZyTllFWVo5V2tRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BMVJacTdtYTZ2S1dNbnpUUlFDMmRpOHZ4YXJiWVNaZWV6YTl2Y3NlbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild2V05WakEzWVpyRnRuZVpXamR2dlpJeTRVYXIzY3I3eml0Q3I3R3MzQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBDUjBYd3VTMFQ2YTM0QWFaVFpvcFV2NjJ0aDJXcXpCejU4MmtPUW9IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tNcU05TVQ3djRXZHBhT1RzNWhRVFFxbGNQNllrNDhCQWorTkh2dlpHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk2cWhPVGF5enA3aDY0cnEvcS9pRDRpVU80Y00xSVdkd0FVby9DcTFtYWtORTA4RDJJMDZkYUkvdk5WWlZ3b3h1ZWZ2Q0s0dXhBZjl3dDdSN0ZxUWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJrZGV6QzZjaDc0REdFcHdpSFZTR0VjQ2cyTGMzTlVhUkJNYXFYbFBjaHZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzQ2MTkxNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTRCREY4M0I3Qjg2MTdDREE5M0FDNDA1OTFGNzZFMzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjUxMDM2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRjNiaVVLcGtTenU4eTlRVW9uZDlxUSIsInBob25lSWQiOiIxYjQ0NWZkYy0zNzQ5LTQwMmQtOWI1Yi1iNzg1MDc5YWEwMTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDA4cFFCbzROZmNzN2MvKzJnOWN3TDR5YnZJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdrMk1idGtRaDFXY2VPdFdzR2F2a1VPUDB2OD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNQkpQQjNEWiIsIm1lIjp7ImlkIjoiMjM0ODA3NDYxOTE3Njo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0ueG0v+GthCDimKB+YEnihKIgIPCfmIzwn5iIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUEcyOFlFRUl6cW9iY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnNlJ1ZGErT21jc1ZSY0hkZitibFZCU0wrUThGSE9jT3VTNS9mK0JDK1drPSIsImFjY291bnRTaWduYXR1cmUiOiJ2ZWFDV1NweFFJV2pBRi91NGNwdFFPZzNIYmFBd0xZN0xBSTNWUFdkMEZqYWx0ZkJGWnJNampOYU9zTmFpSU1LbkJWbG1laDZyTEVBM1p2ODRScnRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid0dFMXhLKy90M0J6Ui9jc29EN0ZXcDV2Ynk3dVY1QVlaNUw5Z05IMVFTWFdRRS9nekc1aWFNZi9KdmhQM2ZkdERmcjU2NTB3dU5RZE1nTmdrWnpyaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc0NjE5MTc2OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWU9rYm5XdmpwbkxGVVhCM1gvbTVWUVVpL2tQQlJ6bkRya3VmMy9nUXZscCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjUxMDM2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDZ3UifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
