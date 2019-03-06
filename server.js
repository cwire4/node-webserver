const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var player = require('play-sound')(opts = {})
var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set('view engine', 'hbs');

/**
 * Middleware
 */

// Server log
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + "\n", (err) => {
    if (err) {
      console.log('Unable to append to server log.');
    }
  });
  next();
});

// Maintenance
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

/**
 * Helpers
 */
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

/**
 * Routes
 */
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  player.play('happybirthday.mp3', function(err){
  if (err) throw err
})
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: "Happy birthday homeskillet!",
    // also https://www.youtube.com/watch?v=wOTBWlt0-Y0
  });
});


app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Project Page',
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
