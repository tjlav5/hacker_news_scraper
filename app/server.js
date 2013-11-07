var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log(req.params);
	res.send('hello');
});

app.listen(3000);
console.log('Listening on port 3000');