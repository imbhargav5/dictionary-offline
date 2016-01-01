import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/index';
import DevTools from '../DevTools';
import App from '../App';

const store = configureStore();
let routerUI, history;



class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return  <Provider store={store}>
		      	 <App/>
		  </Provider>
	}
};

export default Root;