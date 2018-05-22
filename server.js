const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Steven',
    likes: [
      'Hockey',
      'Solidity'
    ]
  });
});

app.get('/about', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'About',
    likes: [
      'Hockey',
      'Solidity'
    ]
  });
});


app.get('/bad', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    errorMessage: 'Error Handling',
  });
});

app.listen(3000);