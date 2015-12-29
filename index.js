import express from 'express';
import RouteHandler from './app/routes/index';
//import DebugMiddleware from './app/middleware/debug';

let app = express();

app.use('static',express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');

//DebugMiddleware(app);
RouteHandler(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});