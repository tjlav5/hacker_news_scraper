var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log(req);
});

app.listen(3000);
console.log('Listening on port 3000');