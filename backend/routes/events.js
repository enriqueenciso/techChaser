const express = require('express');
const bodyParser = require("body-parser");
const Event = require('../models/event');
// const router = express.Router();



var app = express();
app.use(bodyParser.json());

// CONTACTS API ROUTES BELOW

/*
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
*/



/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */




/*
app.get("/api/contacts", function(req, res) {
});
*/

app.post('', (req, res, next) => {
  var event = new Event({
    text: req.body.text
  });
  alert(event);
  event.save().then((doc) => {
    res.send(doc);
    res.status(201).json({
      message: 'Event added successfully'
    });
  }, (e) => {
    res.status(400).send(e);
  });
});


/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */


 /*
app.get("/api/contacts/:id", function(req, res) {
});

app.put("/api/contacts/:id", function(req, res) {
});

app.delete("/api/contacts/:id", function(req, res) {
});
*/
module.exports = app;
