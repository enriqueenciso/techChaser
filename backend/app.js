const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
var {mongoose} = require('./server/db/techChaserDB');
const eventRouters =  require('./routes/events');

const app = express();


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/techchaser'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '/dist/techchaser/index.html'));
});


// Start the app by listening on the default
// Heroku port
//app.listen(process.env.PORT || 8080);

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
app.use('/api/events', eventRouters);

module.exports = app;
