import React from 'react';
import {myEnvIsBrowserFn} from '../../../utils/helpers';
import Montanaflynn from './montanaflynn';
var styles = {};

if(myEnvIsBrowserFn()){
	styles = require('./style.scss');	
}


class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {definition, searchWord} = this.props;

		return <div className={styles.root}>
					<h1>Search Word - {searchWord} </h1>
					<Montanaflynn {...definition.montanaflynn} /> 
			  </div>;
	}
};

export default Card;