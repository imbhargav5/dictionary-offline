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
				<ul className={styles.social}>
					<li className={styles.github}><a target="_blank" href="http://github.com/bhargav175/dictionary-offline">Source</a></li>
				</ul>
		</div>;
	}
};

export default Appbar;