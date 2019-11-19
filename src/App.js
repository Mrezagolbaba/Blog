import React,{Component} from 'react';
import {Provider} from "react-redux";
import {
    Route,
    Switch,
} from 'react-router-dom';
import configureStore from '../src/Redux/store/store';
import BlogComponent from "./Components/Screens/Blog";
import SingleBlog from "./Components/Screens/blogSingle";





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
                <Route exact
                       path="/singleArticle"
                       component={SingleBlog}/>
            </Switch>
        </Provider>
    );
  }
}
export default App

