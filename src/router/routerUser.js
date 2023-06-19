const express = require('express');
const { getUsers } = require('../controller/controller');
const usuarios = express.Router();

usuarios.get('/usuarios', getUsers)

module.exports = usuarios;