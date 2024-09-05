const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/used-car-controller');
const routerUsedCar = express.Router();

routerUsedCar.post('/used-car', AddData);
routerUsedCar.get('/used-car', GetData)
routerUsedCar.put('/used-car/:name', EditData);
routerUsedCar.delete('/used-car/:name', DeleteData)
routerUsedCar.delete('/deleteAll', AllDelete)

module.exports = routerUsedCar