import React,{Component} from 'react';
import Header from "./Header";
import ContentBlog from "./ContentBlog";
import Footer from "./Footer";
import * as Immutable from 'immutable';
import { connect } from 'react-redux';

import {getArticles} from '../Redux/actions';
import articleReducers from "../Redux/reducers/articles";

 class MainBlog extends Component{

    componentDidMount () {
        this.props.articlesActions()

    }



    render(){
            return (
                <div>
                    <Header/>
                    <ContentBlog/>
                    <Footer/>
                </div>
            );
        }


}
function mapStateToProps (state) {
     console.log(state);
    return {
        articles:state.articleReducer
    }
}
// We can dispatch actions to the reducer and sagas
function mapDispatchToProps (dispatch) {
    return {
        articlesActions:()=>{
            dispatch(getArticles())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBlog);

