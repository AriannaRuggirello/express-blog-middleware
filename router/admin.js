const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");
const authenticateMiddleware = require("../middlewares/authenticate");

router.use(authenticateMiddleware)

router.get("/", adminController.index)

module.exports = router;