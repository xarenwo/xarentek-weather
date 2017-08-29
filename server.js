var express = require('express'); // access to express api

// Create the application :)

var app = express(); // to create the app, call the express library


app.use(express.static('public'));
app.listen(3000, function(){
  console.log('Server deployed on port 3000');
});
