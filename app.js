const http = require("http");

const express = require('express');
const app = express();

//  function rqListener(req, res) {
//      console.log(req);
//  }

const server = http.createServer(app);

server.listen(3000);