const {Register, LogIn, GetSignUpData} = require('../controller/auth-controller');

const router = require('express').Router();

router.post('/sign-up', Register)
router.get('/sign-up', GetSignUpData)
router.post('/log-in', LogIn)

module.exports = router