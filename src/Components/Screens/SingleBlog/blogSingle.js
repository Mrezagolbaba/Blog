import React,{Component} from 'react';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import ContentSingleBlog from "./ContentSingleBlog";

export default class SingleBlog extends Component{

    render(){
        console.log('Props Location',this.props.match.params.slug)
        const {index} = this.props.location.state;
        return (
            <div>
                <Header/>
                <ContentSingleBlog  index={index} slug={this.props.match.params.slug} />
                <Footer/>
            </div>
        );
    }

}
