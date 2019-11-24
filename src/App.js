import React,{Component} from 'react';
import {Provider} from "react-redux";
import {
    Route,
    Switch,
} from 'react-router-dom';
import configureStore from '../src/Redux/store/store';
import BlogComponent from "./Components/Screens/Blog/Blog";
import SingleBlog from "./Components/Screens/SingleBlog/blogSingle";
import {withRouter} from "react-router";





class App extends Component {
  render() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={BlogComponent}
                />
                <Route
                    exact
                    path="/singleArticle/:slug"
                    component={SingleBlog}/>
            </Switch>
        </Provider>
    );
  }
}
export default withRouter(App)

