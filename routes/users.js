const express = require('express');
const router = express.Router();
const usercontroller=require('../controller/singingup');
router.post('/signup',usercontroller.signup);
router.post('/login',usercontroller.login);



module.exports = router;