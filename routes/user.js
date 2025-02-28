const express=require('express');
const { handleUserSignup,handleUserLognin } = require('../controller/user');
const router =express.Router()

router.post('/',handleUserSignup)
router.post('/login',handleUserLognin)
module.exports=router;