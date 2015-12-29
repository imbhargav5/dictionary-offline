import fs from 'fs';
import path from 'path';

let DebugMiddleware = function(app) {
	
	// var requestTime = function (req, res, next) {
	//   //adding a request time field
	//   req.requestTime = Date.now();

	//   /**
	//    * Add logs 
	//    */
	//   let file = path.join(__dirname, '..','logs', 'requests.txt');
	//   fs.appendFile(file,req.requestTime. + '\t' + req.url+'\n',function(err) {
	//   	if (err) return console.log(err);
	//   	console.log('wrote');
	//   });

	//   /**
	//    * Pass control to next middlewares
	//    */
	//   next();
	// };

	// app.use(requestTime);
};
export default DebugMiddleware;