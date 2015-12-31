import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchDefinition, fetchAllWords} from '../../actions/search';
import Appbar from '../../components/Appbar';
import AppBody from '../../components/Body';
import SearchButton from '../../components/Search';
import CachedWords from '../../components/CachedWords';
import DictionaryCard from '../../components/DictionaryCard';

import {isClient} from '../../../utils/helpers';

if(isClient()){
	require('./style.scss');
}

class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(fetchAllWords());
	}
	handleCachedWordClick(word,e){
		e.preventDefault();
		const {dispatch} = this.props;
		if(typeof word !== 'undefined' && word.toString().length > 0){
			dispatch(fetchDefinition(word.toLowerCase()));		
		}
	}
	handleSubmit(word){
		const {dispatch} = this.props;
		if(typeof word !== 'undefined' && word.toString().length > 0){
			dispatch(fetchDefinition(word.toLowerCase()));		
		}
	}
	render(){
		let {searchReducer, wordsReducer} = this.props;
		return <div className="root">
				<Appbar />
				<SearchButton handleSubmit={this.handleSubmit.bind(this)} />
				<AppBody>
					<CachedWords {...wordsReducer} onLinkClickHandler={this.handleCachedWordClick.bind(this)} />
					<DictionaryCard {...searchReducer}/>
				</AppBody>
			</div>;
	}
};

function select(state){
	return state;
};

export default connect(select)(App);


