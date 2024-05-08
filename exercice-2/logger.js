//  MODULE TO READ AND WRITE ON LOG FILE
import fs from "fs";

const LOG_FILE = "./logs.txt";

/**
 * Read the logs
 * @returns the current log file content
 */
function readLog() {
  let content;
  try {
    content = fs.readFileSync(LOG_FILE).toString();
  } catch (error) {
    console.error("Error reading log file:", error.message);
    content = "";
  }
  return content;
}

//  Write a cleaner version of writeLog() function, in  logger.js file
//    - You will need to use  appendFilesync() from fs module  - instead of writeFileSync()
//    - You can check the docuement :   https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/

/**
 * Add a new log to the file
 * @param {string} newLog - the log to add to the file
 */
function writeLog(newLog) {
  try {
    fs.appendFileSync(LOG_FILE, `${newLog} - at ${new Date().toLocaleTimeString()}\n`);
  } catch (error) {
    console.error("Error writing log:", error.message);
  }
}

export default { readLog, writeLog };
