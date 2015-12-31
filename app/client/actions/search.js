import fetch from 'isomorphic-fetch';
import rest_apis from './api';

export const REQUEST_DEFINITION = 'REQUEST_DEFINITION';
export const RECEIVE_DEFINITION = 'RECEIVE_DEFINITION';
const DEFINITION_API = rest_apis.definition;

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

export function fetchDefinition(word){
  return dispatch => {
    dispatch(requestDefinition(word));
    return fetch(DEFINITION_API+word)      
        .then(response =>  response.json())
            .then(result => dispatch(receiveDefinition( word ,result || {})));
  	};
}