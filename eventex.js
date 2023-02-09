const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("event is begin", (number, name) => {
  console.log(`Event start to run as ${number} and with name ${name}`);
});
// emitter.on("event is begin", (number) => {
//   if (number == "event1") console.log("This is number 1 event");
// });
// console.log("code before event emission");
emitter.emit("event is begin", "event1", "eventemitter");
