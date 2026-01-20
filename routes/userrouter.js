const express = require("express");
const { register, login,UpdateUser } = require("../controller/usercontroller.js");

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.put('/updateuser/:id',UpdateUser)

module.exports = router;