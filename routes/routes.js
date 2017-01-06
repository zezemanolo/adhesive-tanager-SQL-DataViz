//found this on node hero
const path = require('path');
const express = require('express');
const app = express();
//do i need express here?
const pg = require('pg');
//pg-promise?


//login info for db
const conString = 'postgres://zezemanolo:100%Guapo@localhost:5432/node_hero';

const client = new pg.Client(conString);
// make sure to match your own database's credentials
client.connect();
//connect?
console.log('i connected? ');

const query = client.query("SELECT * FROM genrebender");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});

//came across this example w/ pg module, but thinking the first argument should be something else?
/*
app.get('/users', function (req, res, next) {

  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err);
    }
    client.query('SELECT * FROM genrebender;', [], function (err, result) {
      done();
      if (err) {
        // pass the error to the express error handler
        return next(err);
      }
      res.json(result.rows);
    });
  });
});
*/
// After query, send data to index.js and
