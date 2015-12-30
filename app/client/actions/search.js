import fetch from 'isomorphic-fetch';
import rest_apis from './api';

export const REQUEST_DEFINITION = 'REQUEST_DEFINITION';
export const RECEIVE_DEFINITION = 'RECEIVE_DEFINITION';
const DEFINITION_API = rest_apis.definition;

function requestDefinition() {
	return {
		type : REQUEST_DEFINITION
	};
}

function receiveDefinition(result) {
	return {
		type : REQUEST_DEFINITION,
		definition : result
	};
}

export function fetchDefinition(word){
  return dispatch => {
    dispatch(requestDefinition(word));
    return fetch(DEFINITION_API+word)      
        .then(response =>  response.json())
            .then(result => dispatch(receiveDefinition( result || {})));
  	};
}