import React from 'react';
import {myEnvIsBrowserFn} from '../../../utils/helpers';
var styles = {};

if(myEnvIsBrowserFn()){
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