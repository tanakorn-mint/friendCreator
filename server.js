//... express, path, app, etc
var express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.json({ extended: true}));

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));


require('./server/config/mongoose.js')
require("./server/config/routes.js")(app);
/* since routes.js exports a function
 require("./server/config/routes.js") IS A FUNCTION!
 now we invoke it, passing it app!
*/
//... app listen ...

app.listen(8000, function(){
	console.log("listening on port 8000");
});