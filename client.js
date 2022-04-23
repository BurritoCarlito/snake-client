const net = require("net");
const { IP, PORT } = require("./constant");

//establishes a connection with the grame server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', (client) => {
    console.log("Successfully connected to the game server"),
    conn.write("Name: IT1"),
    conn.write("Move: up")
  });

  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });

  conn.setEncoding("utf8");
  
  return conn; 
};


module.exports = {
  connect
};