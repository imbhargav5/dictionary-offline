import fetch from 'isomorphic-fetch';
import rest_apis from './api';
import Database from '../database';
import {isClient} from '../../utils/helpers';


export const REQUEST_DEFINITION = 'REQUEST_DEFINITION';
export const RECEIVE_DEFINITION = 'RECEIVE_DEFINITION';
export const REQUEST_CACHED_WORDS = 'REQUEST_CACHED_WORDS';
export const RECEIVE_CACHED_WORDS = 'RECEIVE_CACHED_WORDS';
const DEFINITION_API = rest_apis.definition;


var db;
  if(isClient()){

    db = new Database();
  }



function addToPouch(obj){
  if(isClient()){
      var payload = {
         action : 'add',
         word : obj.word,
         definition : obj.definition
      };
     db.addWord(payload); 
  }    
}


function getDefinition(word,dispatch){
  if(isClient()){
      var payload = {
         action : 'check_contains_word',
         word : word
      };
     return db.get(word).then((result)=>{
     	dispatch(receiveDefinition( word ,result.definition || {}))
     }).catch((err)=>{
     	return fetch(DEFINITION_API+word)      
	        .then(response =>  response.json())
	            .then(result => {
	            	addToPouch({word:word,definition:result});
	            	dispatch(fetchAllWords());
	            	dispatch(receiveDefinition( word ,result || {}));
	            });
	  });
   }else{
  	return new Promise();
  }   
}





function requestWords(){
	return {
		type : REQUEST_CACHED_WORDS
	};
}

function receiveWords(result){
	return {
		type : RECEIVE_CACHED_WORDS,
		words : result
	};
}

function requestDefinition(word) {
	return {
		type : REQUEST_DEFINITION,
		searchWord : word
	};
}

function receiveDefinition(word,result) {
	return {
		type : RECEIVE_DEFINITION,
		definition : result,
		searchWord : word
	};
}
export function fetchAllWords(){
	return dispatch => {
		dispatch(requestWords());
		return db.allWords().then((result)=>{
			let words = [];
			words = result.rows.map(r => r.id);
			dispatch(receiveWords(words));
		});
	}
}

export function fetchDefinition(word){
  return dispatch => {
	    dispatch(requestDefinition(word));
	    getDefinition(word,dispatch);
	};
}