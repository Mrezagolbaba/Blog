import React,{Component} from 'react';
import {
    ContentHolder,
    DateTimeArticle,
    DescriptionArticle,
    HolderUnderArticle,
    ImageArticle,
    SocialHolder,
    TagsHolder,
    TitleArticle,
    imgeSocial,
    TitleArticleHolder,
    ImageSocial,
    TagTitle,
    TagsName,
    TagNameHolder,
    AuthorHolder,
    AthourName,
    ImageHolder,
    AthourNameHolder, AuthorNameHolder, AuthorImage, AuthorName, AuthorJob, AuthorDescription, CommentArticle
} from "../StyledCoponent/SingleBlogStyled/ContainerSingleContent";
import SideBar from "./SideBar";
import logo from '../../assets/logo.svg'
import {ArticleHolder, ContainerSingleContent} from "../StyledCoponent/SingleBlogStyled/ContainerSingleContent";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {connect} from "react-redux";
import {CardHolderStyled} from "../StyledCoponent/BlogStyled/ContainerContent";


 class contentSingleBlog extends Component{
    constructor(props){
        super(props)
        // console.log('param',props.match.params.value)
    }
    render(){
        console.log(this.props.index)
        return (
            <ContainerSingleContent key={this.props.index}>
                <ContentHolder>
                    {this.props.articles.articles&&this.props.articles.articles.map((Items,index)=> {
                        if(this.props.index===index){
                            return (
                                <ArticleHolder>
                                    <TitleArticleHolder>
                                        <TitleArticle>
                                            {Items.title}
                                        </TitleArticle>
                                        <DateTimeArticle>
                                            By: Jhon Doe, Date: 22 April 2018
                                        </DateTimeArticle>
                                    </TitleArticleHolder>
                                    <ImageArticle/>
                                    <DescriptionArticle>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis.
                                        Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Odio tempor orci
                                        dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam
                                        vestibulum. Pellentesque nec nam aliquam sem et tortor. Quam elementum pulvinar
                                        etiam non quam lacus suspendisse faucibus interdum. Amet porttitor eget dolor morbi
                                        non arcu risus. Risus pretium quam vulputate dignissim suspendisse in est ante. Nunc
                                        consequat interdum varius sit amet mattis vulputate. Magna ac placerat vestibulum
                                        lectus mauris ultrices. Ullamcorper dignissim cras tincidunt lobortis feugiat
                                        vivamus at augue.
                                        Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Justo donec enim
                                        diam vulputate ut pharetra sit. Natoque penatibus et magnis dis. Tortor aliquam
                                        nulla facilisi cras fermentum odio eu feugiat. Semper auctor neque vitae tempus quam
                                        pellentesque nec. Ut consequat semper viverra nam libero. Pulvinar mattis nunc sed
                                        blandit libero. Tristique senectus et netus et malesuada fames ac turpis egestas.
                                        Lobortis feugiat vivamus at augue eget arcu dictum varius. Turpis egestas maecenas
                                        pharetra convallis posuere morbi leo urna. Ultricies tristique nulla aliquet enim.
                                        Ultricies lacus sed turpis tincidunt id. Dictum varius duis at consectetur.
                                        Consequat semper viverra nam libero justo laoreet. Cras semper auctor neque vitae
                                        tempus. Morbi tristique senectus et netus et malesuada.
                                    </DescriptionArticle>
                                    <HolderUnderArticle>
                                        <SocialHolder>
                                            <ImageSocial src={logo}/>
                                            <ImageSocial src={logo}/>
                                            <ImageSocial src={logo}/>
                                            <ImageSocial src={logo}/>
                                        </SocialHolder>
                                        <TagsHolder>
                                            <TagTitle>Tags</TagTitle>
                                            <TagNameHolder>
                                                <TagsName>ui</TagsName>
                                            </TagNameHolder>
                                            <TagNameHolder>
                                                <TagsName>ux</TagsName>
                                            </TagNameHolder>
                                            <TagNameHolder>
                                                <TagsName>Design</TagsName>
                                            </TagNameHolder>
                                            <TagNameHolder>
                                                <TagsName>Code</TagsName>
                                            </TagNameHolder>
                                        </TagsHolder>
                                        <AuthorHolder>
                                            <ImageHolder>
                                                <AuthorImage/>
                                            </ImageHolder>
                                            <AuthorNameHolder>
                                                <AuthorName>
                                                    Donald Smith
                                                </AuthorName>
                                                <AuthorJob>
                                                    post Editor
                                                </AuthorJob>
                                                <AuthorDescription>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc
                                                    lobortis mattis. Facilisi nullam vehicula ipsum a arcu cursus vitae
                                                    congue mauris.

                                                </AuthorDescription>
                                            </AuthorNameHolder>
                                        </AuthorHolder>
                                    </HolderUnderArticle>
                                    <CommentArticle>
                                        <Comment.Group>
                                            <Header as='h3' dividing>
                                                Comments
                                            </Header>

                                            <Comment>
                                                <Comment.Avatar
                                                    src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                                                <Comment.Content>
                                                    <Comment.Author as='a'>Matt</Comment.Author>
                                                    <Comment.Metadata>
                                                        <div>Today at 5:42PM</div>
                                                    </Comment.Metadata>
                                                    <Comment.Text>How artistic!</Comment.Text>
                                                    <Comment.Actions>
                                                        <Comment.Action>Reply</Comment.Action>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                            </Comment>

                                            <Comment>
                                                <Comment.Avatar
                                                    src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                <Comment.Content>
                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                    <Comment.Metadata>
                                                        <div>Yesterday at 12:30AM</div>
                                                    </Comment.Metadata>
                                                    <Comment.Text>
                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                    </Comment.Text>
                                                    <Comment.Actions>
                                                        <Comment.Action>Reply</Comment.Action>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                                <Comment.Group>
                                                    <Comment>
                                                        <Comment.Avatar
                                                            src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                        <Comment.Content>
                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                            <Comment.Metadata>
                                                                <div>Just now</div>
                                                            </Comment.Metadata>
                                                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                                            <Comment.Actions>
                                                                <Comment.Action>Reply</Comment.Action>
                                                            </Comment.Actions>
                                                        </Comment.Content>
                                                    </Comment>
                                                </Comment.Group>
                                            </Comment>
                                            <Comment>
                                                <Comment.Avatar
                                                    src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
                                                <Comment.Content>
                                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                                    <Comment.Metadata>
                                                        <div>5 days ago</div>
                                                    </Comment.Metadata>
                                                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                                    <Comment.Actions>
                                                        <Comment.Action>Reply</Comment.Action>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                            </Comment>

                                            <Form reply>
                                                <Form.TextArea/>
                                                <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                                            </Form>
                                        </Comment.Group>
                                    </CommentArticle>
                                </ArticleHolder>
                            )
                        }

                    })}

                    <SideBar/>
                </ContentHolder>
            </ContainerSingleContent>
        );
    }
}

const mapStateToProps= (state)=> {
    return {
        articles:state.articleReducer
    }
};
const ContentSingleBlog= connect(mapStateToProps,null)(contentSingleBlog);
export default ContentSingleBlog
