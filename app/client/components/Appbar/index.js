import React from 'react';
import {myEnvIsBrowserFn} from '../../../utils/helpers';
import SearchButton from '../Search';
var styles = {};

if(myEnvIsBrowserFn()){
	styles = require('./style.scss');	
}


class Appbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={styles.root}>
				Appbar <SearchButton/>
		</div>;
	}
};

export default Appbar;