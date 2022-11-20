const express = require('express');
const router = express.Router();

const {create,login }= require('../controllers/user')
const {verfiytoken} = require('../config/verfiy')

router.post('/create',create);
router.post('/login',login);

module.exports = router


