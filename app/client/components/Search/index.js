import React from 'react';
import {myEnvIsBrowserFn} from '../../../utils/helpers';
var styles = {};

if(myEnvIsBrowserFn()){
	styles = require('./style.scss');	
}


class Search extends React.Component{
	constructor(props){
		super(props);
		this.state ={val:""};
	}
	handleChange(e){
		this.setState({val:e.target.value});
	}
	render(){
		return <div className={styles.root}>
				<input onChange={this.handleChange.bind(this)} type="search" name="search-box" value={this.state.val} />
		</div>;
	}
};

export default Search;