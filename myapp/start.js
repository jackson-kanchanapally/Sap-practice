const express = require('express');
const bodyParser = require('body-parser');

const users = require('./users.json');
const app = express();

// Include body parser middleware
app.use(bodyParser.json());

app.get('/users', function (req, res) {
  res.status(200).json(users);
});

app.post('/users', function (req, res) {
  var newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  res.status(201).json(newUser);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});
