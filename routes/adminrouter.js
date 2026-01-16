const express = require("express");
const { adminregister } = require("../controller/admincontroller");

const Adminrouter = express.Router();

Adminrouter.post('/admin', adminregister)

module.exports = Adminrouter;