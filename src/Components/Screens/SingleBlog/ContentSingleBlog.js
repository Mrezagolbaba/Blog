import React,{Component} from 'react';
import SideBar from "../SideBar/SideBar";
import logo from '../../../assets/logo.svg'
import {Comment, Header, TextArea} from 'semantic-ui-react'
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../StyledCoponent/SingleBlogStyled/ContainerSingleContent'
import moment from "moment";
import {Input} from "semantic-ui-react";


class contentSingleBlog extends Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props.index);
        const {classes} =this.props;
        return (
            <div className={classes.ContainerSingleContent} key={this.props.index}>
                <div className={classes.ContentHolder}>
                    {this.props.articles.articles&&this.props.articles.articles.map((Items,index)=> {
                        if(this.props.index===index){
                            return (
                                <div className={classes.ArticleHolder}>
                                    <div className={classes.TitleArticleHolder}>
                                        <p className={classes.TitleArticle}>
                                            {Items.title}
                                        </p>
                                        <p className={classes.DateTimeArticle}>
                                            By: <span> {Items.author.username}</span>, Date: <span>{moment(Items.createdAt).format('DD MMMM YYYY')}</span>
                                        </p>
                                    </div>
                                    <div className={classes.ImageArticle} />
                                    <div className={classes.DescriptionArticle}>
                                        {Items.body}
                                    </div>
                                    <div className={classes.HolderUnderArticle}>
                                        <div className={classes.SocialHolder}>
                                            <img alt={'ImageSocial'} className={classes.ImageSocial} src={logo}/>
                                            <img alt={'ImageSocial'} className={classes.ImageSocial} src={logo}/>
                                            <img alt={'ImageSocial'} className={classes.ImageSocial} src={logo}/>
                                            <img alt={'ImageSocial'} className={classes.ImageSocial} src={logo}/>
                                        </div>
                                        <div className={classes.TagsHolder}>
                                            <p className={classes.TagTitle}>Tags</p>
                                            {Items.tagList.map((tags)=>{
                                                return(
                                                    <div className={classes.TagNameHolder}>
                                                        <p className={classes.TagsName}>{tags}</p>
                                                    </div>
                                                )})}
                                        </div>
                                        <div className={classes.AuthorHolder}>
                                            <div className={classes.ImageHolder}>
                                                <img className={classes.AuthorImage} src={Items.image}/>
                                            </div>
                                            <div className={classes.AuthorNameHolder}>
                                                <p className={classes.AuthorName}>
                                                    {Items.author.username}
                                                </p>
                                                <p className={classes.AuthorJob}>
                                                    post Editor
                                                </p>
                                                <p className={classes.AuthorDescription}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc
                                                    lobortis mattis. Facilisi nullam vehicula ipsum a arcu cursus vitae
                                                    congue mauris.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.CommentArticle}>
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
                                        </Comment.Group>
                                    </div>
                                    <div className={classes.CommentInputs}>
                                        <Input className={classes.InputCommentLeft} placeholder={'Name'} />
                                        <Input className={classes.InputComment}  placeholder={'Email Address'}  />
                                    </div>
                                    <TextArea placeholder={'Message'} className={classes.CommentTextArea}>
                                    </TextArea>
                                    <button className={classes.SubmitButton}>
                                        <p className={classes.ButtonText}>Submit</p>
                                    </button>

                                </div>
                            )
                        }

                    })}

                    <SideBar/>
                </div>
            </div>
        );
    }
}

const mapStateToProps= (state)=> {
    return {
        articles:state.articleReducer
    }
};


const ContentSingleBlog= connect(mapStateToProps,null)(contentSingleBlog);
export default withStyles(styles) (ContentSingleBlog)
