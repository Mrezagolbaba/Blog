import React,{Component} from 'react';
import Header from "./Header";

import Footer from "./Footer";
import ContentSingleBlog from "./ContentSingleBlog";

export default class SingleBlog extends Component{
    render(){
        return (
            <div>
                <Header/>
                <ContentSingleBlog/>
                <Footer/>
            </div>
        );
    }

}
