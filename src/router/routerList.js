const express = require('express');
const { getList } = require('../controller/controller');
const list = express.Router();

list.get('/lista', getList)

module.exports = list;