const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const port = 3000;
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'ndwnd93er932rh02'

app.use(express.json()); //body parser
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/login', async (req,res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const {email,password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({
        email:userDoc.email,
        id:userDoc._id
      }, jwtSecret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.json('not found');
  }
});

app.get('/profile', (req,res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
});


app.post('/logout',(req,res)=>{
  res.cookie('token','').json(true)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});