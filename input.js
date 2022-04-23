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

  if (key === '\w') {
    connection.write("Move: up");
  }

  if (key === '\a') {
    connection.write("Move: left");
  }

  if (key === '\s') {
    connection.write("Move: down");
  }

  if (key === '\d') {
    connection.write("Move: right");
  }

  if (key === '\q') {
    connection.write("Say: :D");
  }

  if (key === '\e') {
    connection.write("Say: Hi!");
  }

  if (key === '\h') {
    connection.write("Say: Bye");
  }

  if (key === '\g') {
    connection.write("Say: Wow");
  }

  if (key === '\c') {
    connection.write("Say: Boo");
  }
  

};


module.exports = {
  setInput
};