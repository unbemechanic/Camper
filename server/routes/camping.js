const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/camping');
const { protect } = require('../middleware/auth.middleware');
const routerCamping = express.Router();

routerCamping.post('/camping', protect, AddData);
routerCamping.get('/camping', GetData)
routerCamping.put('/camping/:id', protect, EditData);
routerCamping.delete('/camping/:id', protect, DeleteData)
routerCamping.delete('/deleteAll', AllDelete)

module.exports = routerCamping