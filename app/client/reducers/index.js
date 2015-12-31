import { combineReducers } from 'redux';
import {RECEIVE_DEFINITION,REQUEST_DEFINITION} from '../actions/search';
import {isClient} from '../../utils/helpers';

var MyWorker = isClient() ?  require("worker?inline=true!../worker/index.js") : function(){};

var myWorker = new MyWorker();


function addToPouch(obj){
  if(isClient()){
      var payload = {
         action : 'add',
         word : obj.word,
         definition : obj.definition
      };
      myWorker.postMessage(payload);
  }    
}




function searchReducer(state={ definition : {} , searchWord : '',loading:false},action){
   switch(action.type){
      case RECEIVE_DEFINITION :

        if(isClient()){
          addToPouch({word : state.searchWord, definition : state.definition});  
        }

        return Object.assign({},state,{definition:action.definition,searchWord : action.searchWord,loading:false});
      case REQUEST_DEFINITION :
        return Object.assign({},state,{definition:{},searchWord : action.searchWord,loading : true});
      default:
        return state;
   };
}

const rootReducer = combineReducers({
    searchReducer
});

export default rootReducer;