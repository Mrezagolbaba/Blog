import React,{Component} from 'react';
import {CardHolderStyled, ContainerContent, ContentHolder} from "../StyledCoponent/BlogStyled/ContainerContent";
import CardItem from "./CardItem";
import SideBar from "./SideBar";
import {withRouter} from 'react-router-dom';


class ContentBlog extends Component{

    handleClick(){
        this.props.history.push('/singleArticle')
    }
    render(){
        var _this = this;
        return (
            <ContainerContent>
                <ContentHolder>
                    <CardHolderStyled>
                        <CardItem handleClick={_this.handleClick}/>
                        <CardItem handleClick={_this.handleClick} />
                    </CardHolderStyled>
                    <SideBar/>
                </ContentHolder>
            </ContainerContent>
        );
    }
}
export default withRouter( ContentBlog)
