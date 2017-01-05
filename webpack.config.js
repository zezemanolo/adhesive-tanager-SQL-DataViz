const path = require('path');

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: "style!css"
      }
    ]
  }
};
//do we need babel? anyway copying this from tic tac toe & blackjack apps
