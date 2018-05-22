const express = require('express');
const hbs = require('hbs');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: "Welcome to my website",
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});


app.get('/bad', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    errorMessage: 'Error Handling',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});