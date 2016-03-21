var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Express HTTP Server Listening');
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

app.get('/hello', function(req, res){
  res.send({payload: 'world'});
});
