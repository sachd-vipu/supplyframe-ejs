var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
res.render('pages/home');
});

app.listen(3000);

// Ref: https://mammothinteractive.com/build-a-hello-world-website-and-web-server-with-ejs-node-and-express/
