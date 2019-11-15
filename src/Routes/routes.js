import React from 'react';
// We import Provider
import { Provider } from 'react-redux';
// We need the store to be passed to Provider
import configureStore from '../Redux/store/store';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
// import { AddGameContainer, GamesContainer } from './containers';
import  MainBlog from '../blog/Blog';
import  SingleBlog  from '../blog/blogSingle';
const store = configureStore();



// Provider wraps our root component
const routes = (
    <Provider store={store}>
        <Router history={createHashHistory}>
            <Route exact path="/" component={MainBlog}>

            </Route>
            <Route path="/singleArticle" component={SingleBlog}>

            </Route>
        </Router>
    </Provider>
);

export default routes;
