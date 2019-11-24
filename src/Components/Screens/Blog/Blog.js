//this file contain some code for first screen called Blog
// i create this file with
// 3 part
// -ContentBlog _Header -Footer


import React,{Component} from 'react';
import Header from "../Header/Header";
import ContentBlog from "./ContentBlog";
import Footer from "../Footer/Footer";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import {getArticles} from '../../../Redux/actions';

 class MainBlog extends Component{

//in componentDidMount we can call some action to fetch data from server side
    componentDidMount(){
     this.props.articlesActions()
    }



    render(){
        if(!this.props.articles){
           return (
               <Loader
                   type="Puff"
                   color="#00BFFF"
                   height={100}
                   width={100}
               />
           )
        }else {
            return (
                <div>
                    <Header/>
                    <ContentBlog/>
                    <Footer/>
                </div>
            );
        }

        }


}

//we can receive some props from redux
const mapStateToProps= (state)=> {

    return {
        articles:state.articleReducer
    }
};
// We can dispatch actions to the reducer and sagas
const mapDispatchToProps= (dispatch)=> {
    return {
        articlesActions:()=>{
            dispatch(getArticles())
        }
    };
};

//connect Component to Redux and export this
const BlogComponent= connect(mapStateToProps, mapDispatchToProps)(MainBlog);
 export default BlogComponent

