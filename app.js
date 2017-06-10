var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send('Hello World')
})

app.listen(port, function(){
	console.log('listening on port ' + port);
});

app.post('/keywords', function(req, res, next) {
	var userName = req.body.user_name;

	if (req.body.trigger_word == 'Friday!') {
		var botPayload = {
			text: "Did someone say Friday?? "
		}
	} else if (req.body.trigger_word == 'motivate me') {
		var botPayload = {
			text: "Hey " + userName + ", keep being awesome.  - Elegran bot "
		};
	};

	if (userName !== 'slackbot') {
			return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});
