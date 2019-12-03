const express = require('express');

const HubsRouter = require('../hubs/hubs-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Hubs API</h>
      <p>Welcome to the Lambda Hubs API</p>
    `);
  });

server.use("/api/hubs", HubsRouter); // *** 2

  //export default server //ES6 Modules
  module.exports = server; // <<<<export server