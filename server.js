var express = require('express'); // access to express api

// Create the application :)

var app = express(); // to create the app, call the express library
var port = process.env.PORT || 3000;


//redirect to http
app.use(function (req,res,next) {
if(req.headers['x-forwarded-proto'] === 'https') { //https or http
    res.redirect('http://'+ req.hostname + req.url);
}  else {
  next();
}
});


app.use(express.static('public'));
app.listen(port, function(){
  console.log('Server deployed on port ' + port);
});
