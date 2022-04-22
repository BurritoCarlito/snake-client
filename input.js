//stdin object returned will allow us to listen for keyboard input and react to it

const setInput = function () {
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
  };
  

};


module.exports = {
  setInput,
  handleUserInput,
};