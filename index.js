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

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === <SECRET>) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});
// app.post('/webhook/', funtion(req, res) {
// 	res.send('hello world');
// })

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});