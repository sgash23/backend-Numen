const express = require('express');
const router = require('../router/router');
const list = require('../router/routerList');
const maths = require('../router/routerMaths');
const usuarios = require('../router/routerUser');
const getHourMiddleware = require('../utils/getHourMiddleware');
const servidor = express();

//middleware dogmatico, para que express entienda el formato json
servidor.use(express.json());

servidor.use('/api', router);
servidor.use(getHourMiddleware)
servidor.use('/api', list);
servidor.use('/api', maths);
servidor.use('/api', usuarios);

module.exports = servidor;