const express = require('express');
const app = express();
const pg = require('pg');
const port = 3000;


// Using express to connect to local server, pg module to "read" the database data (postgresql), and may need pg-promise + pug down the road

app.get('/', (request, response) => {
  response.send('YAAAAAAAASSSSSSSS! ! ! ! ! \n TESTING! Hello from Express!');
});


//connected to express local server. Are we displaying the db info here?

//



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`TESTING! server is listening on ${port}`);
});
