import React,{Component} from 'react';
import Header from "./Header";
import ContentBlog from "./ContentBlog";
import Footer from "./Footer";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import {getArticles} from '../../Redux/actions';

 class MainBlog extends Component{

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

const BlogComponent= connect(mapStateToProps, mapDispatchToProps)(MainBlog);
 export default BlogComponent

