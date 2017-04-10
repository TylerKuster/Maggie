var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) 
{
  res.send('Maggie is working!')
})

app.get('/vehicle-link', function (req, res) 
{
  res.send('Success!')
})

// app.post('/webhook/', funtion(req, res) {
// 	res.send('hello world');
// })

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});