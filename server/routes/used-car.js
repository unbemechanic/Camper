const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/used-car-controller');
const { protect } = require('../middleware/auth.middleware');
const routerUsedCar = express.Router();

routerUsedCar.post('/used-car', protect, AddData);
routerUsedCar.get('/used-car', GetData)
routerUsedCar.put('/used-car/:id', protect, EditData);
routerUsedCar.delete('/used-car/:id', protect, DeleteData)
routerUsedCar.delete('/deleteAll', AllDelete)

module.exports = routerUsedCar