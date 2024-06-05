const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const path = require("path");
const fsPromise = require("fs").promises;
const fs = require("fs");

async function logEvents(message) {
  try {
    const new_uuid = uuidv4();
    const new_date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const logItem = {
      id: new_uuid,
      date: new_date,
      message: message,
    };
    if (!fs.existsSync(path.join(__dirname, "Logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "Logs"));
    }

    if (!fs.existsSync(path.join(__dirname, "Logs/eventLogs.txt"))) {
      await fsPromise.writeFile(
        path.join(__dirname, "Logs", "eventLogs.txt"),
        JSON.stringify(logItem)
      );
    } else {
      await fsPromise.appendFile(
        path.join(__dirname, "Logs", "eventLogs.txt"),
        `\n${JSON.stringify(logItem)}`
      );
    }
  } catch (err) {
    console.log(err);
  }
}

// module.exports = logEvents
exports.logEvent = { logEvents };
