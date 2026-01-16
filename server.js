const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const user = require("./model/UserModel");
const userrouter = require("./routes/userrouter.js");
const Adminrouter = require("./routes/adminrouter.js");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userrouter);

app.use("/api/admin",Adminrouter)

app.listen(3000, () => {});
