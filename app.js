const http = require("http");
const routes = require('./routes');

//  function rqListener(req, res) {
//      console.log(req);
//  }

const server = http.createServer(routes.handler);

server.listen(3000);