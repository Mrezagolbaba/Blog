// We import the combineReducers function
import { combineReducers } from 'redux';
// Import our reducers function from here
import articleReducer from './articlesReducer';
import {SingleArticleReducer} from './SingleItemReducer'



// combineReducers merges them all!
const AllReducer= combineReducers({
    articleReducer,
    SingleArticleReducer
});
export default AllReducer
