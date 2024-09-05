const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/tuning-controller');
const routerTuning = express.Router();

routerTuning.post('/tuning', AddData);
routerTuning.get('/tuning', GetData)
routerTuning.put('/tuning/:name', EditData);
routerTuning.delete('/tuning/:name', DeleteData)
routerTuning.delete('/deleteAll', AllDelete)

module.exports = routerTuning