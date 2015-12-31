import React from 'react';
import {isClient} from '../../../utils/helpers';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}

function StatusCode(props){
	let {statusCode} = props;
	if(typeof statusCode !=='undefined'){
		
		return <h2> Status = {statusCode} </h2>;
	}else{
		
		return <span/>;
	}
}


class MontanaFlynn extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		
		let {definition,statusCode} = this.props;
		let defintionUI = definition instanceof Array ? definition.map((d,i)=><li key={i}> 
				<span className={styles.montana__text}>{d.text}</span> 
				<span className={styles.montana__attribution}>{d.attribution}</span> 
			</li>) : null;
		
		return <div className={styles.montana}>
					<StatusCode statusCode={this.props.statusCode}/>
					<ul className={styles.montana__list}>
						{defintionUI}
					</ul>
			</div>;
	}
};

export default MontanaFlynn;