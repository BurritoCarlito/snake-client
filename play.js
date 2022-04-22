const net = require("net");

//establishes a connection with the grame server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });

// conn object is no full of useful methods and properties that can now be used to interact with the server

// interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn; // represents the connection with the server
};

console.log("Connecting ...");
connect();