import React from 'react';
import Appbar from './Appbar/index';
console.log(Appbar);

class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className="root"><Appbar/></div>;
	}
};

export default Root;