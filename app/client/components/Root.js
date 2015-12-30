import React from 'react';
import Appbar from './Appbar/index';
import {myEnvIsBrowserFn} from '../../utils/helpers';

if(myEnvIsBrowserFn()){
	require('./style.scss');
}

class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className="root"><Appbar/></div>;
	}
};

export default Root;