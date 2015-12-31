import React from 'react';
import {isClient} from '../../../utils/helpers';
var styles = {};

if(isClient()){
	styles = require('./style.scss');	
}

function WordLink(props){
	let {word,handleClick} = props;
	return <a href="#" className={styles.cachedWord} onClick={handleClick}>{word}</a>;
}

export default function CachedWords(props){
	let {words,loading, onLinkClickHandler} = props;
	if(words.length ===0){
		return <span/>;
	}
	let wordsUI = words.map((w,i)=><WordLink handleClick={onLinkClickHandler.bind(this,w)} key={i} word={w} />);
	return <div className={styles.root}>
		<h3>Cached Words </h3>
		{wordsUI}
	</div>;
};