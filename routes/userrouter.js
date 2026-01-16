const express = require("express");
const { register, login } = require("../controller/usercontroller.js");

const router = express.Router();

router.post('/register', register)

module.exports = router;