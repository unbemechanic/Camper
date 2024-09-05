const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/caravan-controller ');
const routerCaravan = express.Router();

routerCaravan.post('/caravan', AddData);
routerCaravan.get('/caravan', GetData)
routerCaravan.put('/caravan/:name', EditData);
routerCaravan.delete('/caravan/:name', DeleteData)
routerCaravan.delete('/deleteAll', AllDelete)

module.exports = routerCaravan