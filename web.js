var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/',function(request, response){
 
var contents = fs.readFile('index.html','utf8',function(err, data){
    if(err){
    response.send('unable to load index.html');
    }

    else{
	response.send(data);
    }
});

var buf = new Buffer(256);

var len = buff.write('\u00d + \u00bc = \u00be', 0);

app.get('/', function(request, response) {

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

