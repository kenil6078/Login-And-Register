const mongooge = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../model/UserModel.js");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(201).json({ message: "All Fields Are Required" });

const existsuser = await User.findOne({ email });
  if (existsuser)
    return res.status(201).json({ message: "User Already Exists" });
  const Hashpassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: Hashpassword,
  });
  await user.save();
  res.status(201).json({ message: "User Registered Successfully" , user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(201).json({ message: "All Fields Are Required" });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(201).json({ message: "Invalid Email or Password" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(201).json({ message: "Invalid Email or Password" });
  res.status(200).json({ message: "Login Successful" , user });
};


module.exports = { register, login };