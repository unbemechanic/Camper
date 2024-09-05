const express = require('express');
const { AddData, GetData, EditData, DeleteData, AllDelete } = require('../controller/motor-controller');
const { protect } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/motor',protect, AddData);
router.get('/motor', GetData)
router.put('/motor/:name', EditData);
router.delete('/motor/:name', DeleteData)
router.delete('/deleteAll', AllDelete)

module.exports = router