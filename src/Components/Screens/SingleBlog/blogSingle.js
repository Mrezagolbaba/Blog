import React,{Component} from 'react';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import ContentSingleBlog from "./ContentSingleBlog";

export default class SingleBlog extends Component{

    componentDidMount() {
        // const {index} = this.props.location.state;
        // console.log('Props Location',index)
    }

    render(){
        const {index} = this.props.location.state;
        return (
            <div>
                <Header/>
                <ContentSingleBlog  index={index} />
                <Footer/>
            </div>
        );
    }

}
