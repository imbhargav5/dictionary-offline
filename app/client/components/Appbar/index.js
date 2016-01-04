import React from 'react';
import {isClient} from '../../../utils/helpers';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class Appbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={styles.root}>
				Offline Dictionary, Built with MontanaFlynnAPI {this.props.children}
				
		</div>;
	}
};

export default Appbar;