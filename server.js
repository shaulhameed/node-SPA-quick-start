var express = require('express'),
	http = require('http'),
	https = require('https'),
	path = require('path');

var app = express(),
	server = http.createServer(app);

	//Rendering Static files
	app.use(express.static(__dirname + '/public'));

	//Set application logger
	app.use(function(req, res, next){
		console.log('%s %s', req.method, req.url);
		next();
	});

	//Set environment variables

	app.set('port', 3000);
	app.set('env', 'development');

	app.get('*', function(req, res){
		res.sendfile('index.html');
	});

	server.listen(app.get('port'), function(){

		console.log('Your application started on port:' + app.get('port'));
	});