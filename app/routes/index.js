import path from 'path';

/** 
 *  Server side rendering
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../client/containers/Root';


import ApiRouteHandler from './api';
var jade_file = 'index';
if(process.env.NODE_ENV === 'development'){

}else{
	jade_file = 'index.production'
}


let RouteHandler = function(app){
	
	ApiRouteHandler(app);	
	
	app.get('/', function (req, res) {
   console.log(req.hostname,req.url);

	  res.render(jade_file,{
	  	reactOutput : ReactDOMServer.renderToString(React.createFactory(Root)({})),
	  	env : process.env.NODE_ENV
	  });
	});
};

export default RouteHandler;
