import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
//import fetch from 'isomorphic-fetch';
import unirest from 'unirest';
import Root from '../components/Root';


let RouteHandler = function(app){
	


	// app.get('/time', function (req, res) {
	//   var responseText = 'Hello World!';
	//   responseText += 'Requested at: ' + req.requestTime + '';
	//   res.send(responseText);
	// });

	app.get('/define/:word',function(req,res){
		unirest.get("https://montanaflynn-dictionary.p.mashape.com/define?word="+req.params.word)
			.header("X-Mashape-Key", "iiSaW4mBUOmshbYXTcuSiVLMSCSxp1qcq6Ojsna5BWrLqhZs2R")
			.header("Accept", "application/json")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.send(result.body);
			});
	});

	app.get('/', function (req, res) {
	  res.render('index',{reactOutput : ReactDOMServer.renderToString(React.createFactory(Root)({}))});
	  //res.send("yo ");
	});
};

export default RouteHandler;