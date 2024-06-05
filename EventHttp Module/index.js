const { logEvent } = require("./logEvents");
const EventEmitter = require("events");
const eventLogger = new EventEmitter();

eventLogger.on("LogName", (message) => logEvent.logEvents(message));

// setInterval(
setTimeout(() => eventLogger.emit("LogName", `The message is this!!`), 2000);
