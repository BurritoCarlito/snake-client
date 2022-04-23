const net = require("net");
const { IP, PORT } = require("./constant");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server"),
    conn.write("Name: IT1");
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