const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/caravan-controller ');
const { protect } = require('../middleware/auth.middleware');
const routerCaravan = express.Router();

routerCaravan.post('/caravan',protect, AddData);
routerCaravan.get('/caravan', GetData)
routerCaravan.put('/caravan/:id', protect, EditData);
routerCaravan.delete('/caravan/:id', protect, DeleteData)
routerCaravan.delete('/deleteAll', AllDelete)

module.exports = routerCaravan