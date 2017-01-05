const express = require('express');
const app = express();
const port = 3000;


//is this code better off in a diff folder/file?
// these console.logs appear on browser

app.get('/', (request, response) => {
  response.send('TESTING! Hello from Express!');
});

//app.use (read) the data? shoud this go in a different file/folder?

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`TESTING! server is listening on ${port}`);
});
