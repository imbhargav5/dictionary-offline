import React from 'react';
import {isClient} from '../../../utils/helpers';
import Montanaflynn from './montanaflynn';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {definition, searchWord,loading} = this.props, 
			view = null;
		if(typeof searchWord === 'undefined' || searchWord.length ===0){
			return <h1> Enter a word </h1>;
		}
		if(loading){
			view = <h1>Fetching Defintion for {searchWord} </h1>
		}else{
			view = <div className={styles.root}>
					<h1>Search Word - {searchWord} </h1>
					<Montanaflynn {...definition.montanaflynn} /> 
			  </div>
		}
		return view;
	}
};

export default Card;