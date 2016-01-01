import React from 'react';
import {isClient} from '../../../utils/helpers';

const no_results = 'No definitions found';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class MontanaFlynn extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		
		let {definition,statusCode} = this.props;
		let definitionUI = definition instanceof Array ? definition.map((d,i)=><li key={i}> 
				<span className={styles.montana__text}>{d.text}</span> 
				<span className={styles.montana__attribution}>{d.attribution}</span> 
			</li>) : null;


		
		return <div className={styles.montana}>
					<ul className={styles.montana__list}>
						{definitionUI.length > 0 ? definitionUI : no_results}
					</ul>
			</div>;
	}
};


class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {definition, searchWord,loading} = this.props, 
			view = null;
		if(typeof searchWord === 'undefined' || searchWord.length ===0){
			return <h3> Enter a word </h3>;
		}
		if(loading){
			view = <h3>Fetching Defintion for {searchWord} </h3>
		}else{
			view = <div className={styles.root}>
					<h3>Definition - {searchWord} </h3>
					<MontanaFlynn {...definition.montanaflynn} /> 
			  </div>
		}
		return view;
	}
};

export default Card;