import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from '../../store/index';
import DevTools from '../DevTools';
import App from '../App';

const store = configureStore();

class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return  <Provider store={store}>
	      	<div>
	        <App />
	        
	        </div>
		  </Provider>
	}
};

export default Root;