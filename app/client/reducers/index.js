import { combineReducers } from 'redux';
import {RECEIVE_DEFINITION,REQUEST_DEFINITION} from '../actions/search';

function searchReducer(state={ definition : {} , searchWord : ''},action){
   switch(action.type){
      case RECEIVE_DEFINITION :
        return Object.assign({},state,{definition:action.definition,searchWord : action.searchWord});
      default:
        return state;
   };
}

const rootReducer = combineReducers({
    searchReducer
});

export default rootReducer;