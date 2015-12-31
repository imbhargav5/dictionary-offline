import { combineReducers } from 'redux';
import {RECEIVE_DEFINITION,REQUEST_DEFINITION, REQUEST_CACHED_WORDS, RECEIVE_CACHED_WORDS} from '../actions/search';


function wordsReducer(state={words : [], loading : false},action){
   switch(action.type){
      case RECEIVE_CACHED_WORDS :
       return Object.assign({},state,{words:action.words,loading:false});
      case REQUEST_CACHED_WORDS :
        return Object.assign({},state,{words :[],loading : true});
      default:
        return state;
   };
}



function searchReducer(state={ definition : {} , searchWord : '',loading:false},action){
   switch(action.type){
      case RECEIVE_DEFINITION :
       return Object.assign({},state,{definition:action.definition,searchWord : action.searchWord,loading:false});
      case REQUEST_DEFINITION :
        return Object.assign({},state,{definition:{},searchWord : action.searchWord,loading : true});
      default:
        return state;
   };
}

const rootReducer = combineReducers({
    searchReducer,
    wordsReducer
});

export default rootReducer;