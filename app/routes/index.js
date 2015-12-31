import path from 'path';

/** 
 *  Server side rendering
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../client/containers/Root';


import ApiRouteHandler from './api';



let RouteHandler = function(app){
	
	console.log(process.env.NODE_ENV);
	ApiRouteHandler(app);
	

	app.get('/', function (req, res) {
	  res.render('index',{
	  	reactOutput : ReactDOMServer.renderToString(React.createFactory(Root)({})),
	  	env : process.env.NODE_ENV
	  });
	});
};

export default RouteHandler;