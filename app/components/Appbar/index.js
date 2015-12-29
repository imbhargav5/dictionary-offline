import React from 'react';
import {myEnvIsBrowserFn} from '../../utils/helpers';
var styles = {};

if(myEnvIsBrowserFn()){
	styles = require('./style.scss');	
	console.log(styles);
}


class Appbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={styles.root}>AppBar</div>;
	}
};

export default Appbar;