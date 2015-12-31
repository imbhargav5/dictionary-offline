require("babel-polyfill");
import express from 'express';
import RouteHandler from './app/routes/index';
//import DebugMiddleware from './app/middleware/debug';

let app = express(), 
	port = 3000;


console.log(process.env.NODE_ENV);

port = process.env.NODE_ENV === 'production' ? 8080 : 3000;



app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');

//DebugMiddleware(app);
RouteHandler(app);

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});