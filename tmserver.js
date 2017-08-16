//  Entry point
// Run server: node tmserver.js 
// Browser: localhost:3000 

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.send('Hello world');
}); 

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost: 3000; press Ctrl-C to terminate');
});