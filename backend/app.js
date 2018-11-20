const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
//const postRouters =  require('./routes/posts');


const app = express();

// CONNECT TO A MONGODB DATABASE WITH pASSWORD GENERATED IN SECURITY CLUSTER
mongoose.connect("mongodb://localhost:27017/events", { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database!');
})
.catch(() =>{
  console.log('Connection failed!');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

//link to routes -> posts.js
app.use('/api/posts', postRouters);

module.exports = app;
