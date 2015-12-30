import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDefinition} from '../../actions/search';
import Appbar from '../../components/Appbar';
import SearchButton from '../../components/Search';

import {myEnvIsBrowserFn} from '../../../utils/helpers';

if(myEnvIsBrowserFn()){
	require('./style.scss');
}

class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(fetchDefinition('work'));
	}
	handleSubmit(val){
		const {dispatch} = this.props;
		if(typeof val !== 'undefined'){
			dispatch(fetchDefinition(val));		
		}
	}
	render(){
		return <div className="root">
				<Appbar>
					<SearchButton handleSubmit={this.handleSubmit.bind(this)} />
				</Appbar>
			</div>;
	}
};

function select(state){
	return state;
};

export default connect(select)(App);


