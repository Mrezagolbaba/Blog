// We import the combineReducers function
import { combineReducers } from 'redux';
// Import our reducers function from here
import articleReducer from './articles';

// combineReducers merges them all!
const AllReducer= combineReducers({
    articleReducer
});
export default AllReducer
