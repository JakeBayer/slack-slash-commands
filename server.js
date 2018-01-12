var app = require('./app');

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
		res.send('Hello Wrld!');
});

app.post('/darren', function(req, res) {
		res.send('test post: ' + req.body.text);
}

var server = app.listen(app.get('port'), function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Example app listening at http://%s:%s', host, port);
});