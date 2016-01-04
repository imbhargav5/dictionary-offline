import React from 'react';
import {isClient} from '../../../utils/helpers';

var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class Footer extends React.Component{

	render(){
		return <div className={styles.root}>
			<ul className={styles.social}>
					<li className={styles.github}><a target="_blank" href="http://github.com/bhargav175/dictionary-offline">View Source on Github</a></li>
					<li className={styles.github}><a target="_blank" href="http://github.com/bhargav175/dictionary-offline">MIT &copy; Bhargav Ponnapalli</a></li>
				</ul></div>
	}

}

export default Footer;