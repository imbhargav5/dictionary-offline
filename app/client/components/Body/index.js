import React from 'react';
import {isClient} from '../../../utils/helpers';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class AppBody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={styles.root}>
			 {this.props.children}
		</div>;
	}
};

export default AppBody;