const express = require('express');
const router = require('../Routes/farmaciaRoutes');
const server = express();

server.use(express.json());

server.use(router)

module.exports = server;