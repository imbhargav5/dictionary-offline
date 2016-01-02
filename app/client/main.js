import React from 'react';
import Root from './containers/Root';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';

import {isClient} from '../utils/helpers';

if(isClient()){
	let registerServiceWorker = require("serviceworker!./serviceworker/index.js");

	window.PouchDB = PouchDB;

	if ('serviceWorker' in navigator) {
	  registerServiceWorker({scope:'/'}).then(function(registration) {
	    // Registration was successful
	    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
	  }).catch(function(err) {
	    // registration failed :(
	    console.log('ServiceWorker registration failed: ', err);
	  });
	}


}


ReactDOM.render(React.createElement(Root),document.getElementById('app'));