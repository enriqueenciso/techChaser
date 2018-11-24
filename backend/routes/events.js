const express = require('express');
const bodyParser = require("body-parser");
const {Event} = require('../models/event');
// const router = express.Router();



var app = express();
app.use(bodyParser.json());

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */





app.get("/api/contacts", function(req, res) {
});


app.post('', (req, res, next) => {
  const event = new Event({
    name: req.body.name,
    status: req.body.status,
    region: req.body.region,
    description: req.body.description
  });
  event.save().then(createdEvent => {
    res.status(201).json({
      message: "Event added successfully",
      postId: createdEvent._id
    });
  });
});


/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */



app.get("/api/contacts/:id", function(req, res) {
});

app.put("/api/contacts/:id", function(req, res) {
});

app.delete("/api/contacts/:id", function(req, res) {
});

module.exports = app;
