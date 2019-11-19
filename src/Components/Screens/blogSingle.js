import React,{Component} from 'react';
import Header from "./Header";

import Footer from "./Footer";
import ContentSingleBlog from "./ContentSingleBlog";

export default class SingleBlog extends Component{

    render(){
        const {index} = this.props.location.state
        return (
            <div>
                <Header/>
                <ContentSingleBlog index={index} />
                <Footer/>
            </div>
        );
    }

}
