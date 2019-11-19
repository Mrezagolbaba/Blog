import React,{Component} from 'react';
import {
    AuthorCardStyled,
    AuthorHolderCardStyled,
    CardHolderStyled,
    CardItemStyled,
    ContainerContent,
    ContentHolder,
    DescriptionCardStyled,
    DescriptionHolderCardStyled,
    ImageCardStyled,
    TitleCardItemStyled,
    TitleHolderCardStyled
} from "../StyledCoponent/BlogStyled/ContainerContent";
import CardItem from "./CardItem";
import moment from 'moment';
import SideBar from "./SideBar";
import {Link,Route} from 'react-router-dom';
import {getArticles} from "../../Redux/actions";
import {connect} from "react-redux";
import {DescriptionArticle, TitleArticle} from "../StyledCoponent/SingleBlogStyled/ContainerSingleContent";


class ContentBlogs extends Component{
    constructor(props){
            super(props)
        this.state={
          items:[],
            loading:false
        }
    }

    componentDidMount() {
        // eslint-disable-next-line array-callback-return
        Object.values(this.props.articles).map((items)=>{
           this.setState({
               items:items
           },()=>console.log(this.state.items))
        })
    }


    render(){
        console.log('setState',this.props.articles.articles)
        const MAX_LENGTH = 100;
        if(Object.values(this.props.articles)){
            return (
                <ContainerContent>
                    <ContentHolder>
                        <CardHolderStyled >
                            {this.props.articles.articles&&this.props.articles.articles.map((Items,index)=>{

                                return(

                                        <Link  to={{ pathname: '/singleArticle', state: { index: index} }}  >
                                        <CardItemStyled key={index} >
                                            <ImageCardStyled/>
                                            <TitleHolderCardStyled>
                                                <TitleCardItemStyled>
                                                    {Items.title}
                                                </TitleCardItemStyled>
                                            </TitleHolderCardStyled>
                                            <AuthorHolderCardStyled>
                                                <AuthorCardStyled>
                                                    By: <span>{Items.author.username}</span>, Date:<span> {moment(Items.createdAt).format('DD MMMM YYYY')}</span>
                                                </AuthorCardStyled>
                                            </AuthorHolderCardStyled>
                                            <DescriptionHolderCardStyled>
                                                <DescriptionCardStyled maxLength="11">
                                                    {Items.body}
                                                </DescriptionCardStyled>
                                            </DescriptionHolderCardStyled>
                                        </CardItemStyled>
                                        </Link>


                                )
                            })}
                        </CardHolderStyled>
                        <SideBar/>
                    </ContentHolder>
                </ContainerContent>
            );
        }

    }
}

const mapStateToProps= (state)=> {
    return {
        articles:state.articleReducer
    }
};
const ContentBlog= connect(mapStateToProps,null)(ContentBlogs);
export default ContentBlog
