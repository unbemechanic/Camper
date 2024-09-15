const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/tuning-controller');
const { protect } = require('../middleware/auth.middleware');
const routerTuning = express.Router();

routerTuning.post('/tuning',protect, AddData);
routerTuning.get('/tuning', GetData)
routerTuning.put('/tuning/:id',protect, EditData);
routerTuning.delete('/tuning/:id', protect, DeleteData)
routerTuning.delete('/deleteAll', AllDelete)

module.exports = routerTuning