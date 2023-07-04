// load express
const express = require('express');
const path = require('path');

// require the To Do "Database"
const studentDb = require('./data/student-db');


//create our express app
const app = express();

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount middleware (app.use)




// Mount Routes



// Define a "root" route directly on app
app.get('/', function(req, res) {
    // Path must start with a leading slash
  res.redirect('/students');
});

app.get('/home', function(req, res) {
     //never begin the name of the template with a 
    //forward slash.
    res.render('home');
  });

app.get('/students', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', {students});

});

//Tell the app to listen on port 300
//for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
});