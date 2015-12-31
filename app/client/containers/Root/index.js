import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import configureStore from '../../store/index';
import DevTools from '../DevTools';
import App from '../App';

const store = configureStore();
const history = createHistory();

class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return  <Provider store={store}>
		      	 <Router history={history}>
			      <Route path="/" component={App}>
			        
			      </Route>
			    </Router>
		  </Provider>
	}
};

export default Root;