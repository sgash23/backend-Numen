const express = require('express');
const { getMath } = require('../controller/controller');
const maths = express.Router();

maths.get('/maths', getMath)

module.exports = maths;