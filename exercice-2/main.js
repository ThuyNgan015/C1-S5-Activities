//
//  TODO 1-  you have 4 bugs to fix   (  1 bug to in main.js  3 bug in logger.js)
//
//  TODO 2- Write a cleaner version of writeLog() function, in  logger.js file
//    - You will need to use  appendFilesync() from fs module  - instead of writeFileSync()
//    - You can check the docuement :   https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/

import logger from "./logger.js";
// 1  - Display all logs
console.log(logger.readLog());

// 2  - Log a new message
const newLog = "Exercice 2 is alsmost finished";
logger.writeLog(newLog);
