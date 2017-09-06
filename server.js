var express = require('express'); // access to express api

// Create the application :)

var app = express(); // to create the app, call the express library
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.listen(port, function(){
  console.log('Server deployed on port ' + port);
});
