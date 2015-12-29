import React from 'react';
class Root extends React.Component{
	constructor(props){
		super(props);
		this.state = {show :true};
	}
	handleClick(){
		console.log('clicked');
	}

	render(){
		var a = 1;
		return <button onClick={this.handleClick.bind(this)}>Button</button>;
	}
};

export default Root;