require("babel-polyfill");


if(process.env.NODE_ENV !=='production'){
		require('./server/index.dev.js');
}else{
		require('./server/index.production.js');
}
