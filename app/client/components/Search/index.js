import React from 'react';
import {isClient} from '../../../utils/helpers';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}


class Search extends React.Component{
	constructor(props){
		super(props);
		this.state ={val:""};
	}
	_onChange(e){
		this.setState({val:e.target.value});
	}
	_onSubmit(e){
		//prevent form submit
		e.preventDefault();
		//call handle submit from props
		this.props.handleSubmit(this.refs.searchWord.value);
		//reset state value
		this.setState({val:""});
	}
	render(){
		return <div className={styles.root}>
				<form onSubmit={this._onSubmit.bind(this)}>
				<input className={styles.input} placeholder="Search" onChange={this._onChange.bind(this)} ref="searchWord" type="search" name="search-box" value={this.state.val} />
				</form>
		</div>;
	}
};

Search.propTypes = {handleSubmit : React.PropTypes.func};
Search.defaultProps = {handleSubmit : function(){}};
export default Search;