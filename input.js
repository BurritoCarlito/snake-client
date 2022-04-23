const { keyMap } = require("./constant");
let connection; //stores the active TCP connection object.

//stdin object returned will allow us to listen for keyboard input and react to it
const setInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
  console.log("Game Closed");
    process.exit();
  }

  if (key === keyMap.MOVE_UP_KEY) {
    connection.write("Move: up");
  }

  if (key === keyMap.MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }

  if (key === keyMap.MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }

  if (key === keyMap.MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (key === keyMap.HAPPY_KEY) {
    connection.write("Say: :D");
  }

  if (key === keyMap.HI_KEY) {
    connection.write("Say: Hi!");
  }

  if (key === keyMap.BYE_KEY) {
    connection.write("Say: Bye");
  }

  if (key === keyMap.WOW_KEY) {
    connection.write("Say: Wow");
  }

  if (key === keyMap.BOO_KEY) {
    connection.write("Say: Boo");
  }
  

};


module.exports = {
  setInput
};