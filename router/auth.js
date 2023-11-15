const express = require("express");
// istanza router
const router= express.Router();
const authController= require('../controller/auth');

router.post('/',authController.login)



module.exports=router;