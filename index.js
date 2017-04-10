var express = require('express');
var app = express();

app.post('/hello', funtion(req, res)) {
	res.send('hello world');
}

// app.post('/webhook/', funtion(req, res) {
// 	res.send('hello world');
// })

app.listen(process.env.PORT);