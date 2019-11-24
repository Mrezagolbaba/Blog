import React,{Component} from 'react';
import SideBar from "../SideBar/SideBar";
import logo from '../../../assets/logo.svg'
import {Comment, Header, TextArea} from 'semantic-ui-react'
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../StyledCoponent/SingleBlogStyled/ContainerSingleContent'
import moment from "moment";
import {Input} from "semantic-ui-react";
import {fetchArticleAction} from "../../../Redux/actions";
import CircularProgress from "@material-ui/core/CircularProgress";


class contentSingleBlog extends Component{
        componentDidMount() {
            console.log(this.props.slug)
            this.props.onFetchArticle(this.props.slug)
        }

    render(){

        const {classes} =this.props;
        const { article } = this.props;
        if(!article){return <CircularProgress disableShrink />;}
            return (
                <div className={classes.ContainerSingleContent} key={this.props.index}>
                    <div className={classes.ContentHolder}>
                        {/* eslint-disable-next-line array-callback-return */}
                        {this.props.article.article &&
                        <div className={classes.ArticleHolder} >
                            <div className={classes.TitleArticleHolder}>
                                <p className={classes.TitleArticle}>
                                    {this.props.article.article.title}
                                </p>
                                <p className={classes.DateTimeArticle}>
                                    By: <span> {this.props.article.article.author.username}</span>,
                                    Date: <span>{moment(this.props.article.article.createdAt).format('DD MMMM YYYY')}</span>
                                </p>
                            </div>
                            <div className={classes.ImageArticle}/>
                            <div className={classes.DescriptionArticle}>
                                {this.props.article.article.body}
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
                                    {this.props.article.article.tagList.map((tags, i) => {
                                        return (
                                            <div className={classes.TagNameHolder} key={i}>
                                                <p className={classes.TagsName}>{tags}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={classes.AuthorHolder}>
                                    <div className={classes.ImageHolder}>
                                        <img className={classes.AuthorImage} src={this.props.article.article.image} alt={'authorImage'}/>
                                    </div>
                                    <div className={classes.AuthorNameHolder}>
                                        <p className={classes.AuthorName}>
                                            {this.props.article.article.author.username}
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
                                <Input className={classes.InputCommentLeft} placeholder={'Name'}/>
                                <Input className={classes.InputComment} placeholder={'Email Address'}/>
                            </div>
                            <TextArea placeholder={'Message'} className={classes.CommentTextArea}>
                            </TextArea>
                            <button className={classes.SubmitButton}>
                                <p className={classes.ButtonText}>Submit</p>
                            </button>

                        </div>
                        }

                        <SideBar/>
                    </div>
                </div>
            );


    }
}

const mapStateToProps= (state)=> {
    return {
        article:state.SingleArticleReducer.receiveArticleSingle
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchArticle:(slug)=> dispatch(fetchArticleAction(slug))

    }
};


const ContentSingleBlog= connect(mapStateToProps,mapDispatchToProps)(contentSingleBlog);
export default withStyles(styles) (ContentSingleBlog)
