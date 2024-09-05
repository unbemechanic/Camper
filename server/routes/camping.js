const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/camping');
const routerCamping = express.Router();

routerCamping.post('/camping', AddData);
routerCamping.get('/camping', GetData)
routerCamping.put('/camping/:name', EditData);
routerCamping.delete('/camping/:name', DeleteData)
routerCamping.delete('/deleteAll', AllDelete)

module.exports = routerCamping