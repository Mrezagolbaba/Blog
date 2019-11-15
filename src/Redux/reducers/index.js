// We import the combineReducers function
import { combineReducers } from 'redux-immutable';
// Import our reducers function from here
import articleReducer from './articles';

// combineReducers merges them all!
export default combineReducers({
    articleReducer
});
