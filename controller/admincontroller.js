const mongooge = require("mongoose");
const bcrypt = require("bcrypt");
const AdminModel = require("../model/AdminModel");


const adminregister = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(201).json({ message: "All Fields Are Require" });

  const existsuser = await AdminModel.findOne({ email });
  if (existsuser)
    return res.status(201).json({ message: "User Already Exists" });


  const HashPassword = await bcrypt.hash(password, 8);

  const admin = await AdminModel.create({
    username,
    email,
    password: HashPassword,
  });
  await admin.save();
  res.status(201).json({ message: "Admin Registered Successfully", admin });
};

module.exports = {adminregister}
