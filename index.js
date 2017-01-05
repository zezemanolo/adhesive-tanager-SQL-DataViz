const express = require('express');
const app = express();
const pg = require('pg');
const port = 3000;

const conString = 'postgres://zezemanolo:100%Guapo@localhost:5432/node_hero';
const client = new pg.Client(conString);
// make sure to match your own database's credentials
client.connect();

//is this code better off in a diff folder/file?
// these console.logs appear on browser

app.get('/', (request, response) => {
  response.send('YAAAAAAAASSSSSSSS! ! ! ! ! \n TESTING! Hello from Express!');
});

const query = client.query("SELECT * FROM genrebender");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});
//app.use (read) the data? shoud this go in a different file/folder?



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`TESTING! server is listening on ${port}`);
});
