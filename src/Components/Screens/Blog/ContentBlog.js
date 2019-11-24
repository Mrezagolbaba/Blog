import React,{Component} from 'react';
import moment from 'moment';
import SideBar from "../SideBar/SideBar";
import {Link} from 'react-router-dom';
import {fetchArticleAction} from "../../../Redux/actions";
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../StyledCoponent/BlogStyled/ContainerContent'


class ContentBlogs extends Component{
    constructor(props){
        super(props)
        //items is an array which use for render items
        this.state={
            items:[],
            loading:false
        }
    }
    SetSlugItems(Items){
       this.props.onFetchArticle(Items.slug)
    }

//in render first we check props and then we map this for show all items
    render(){
        const {classes} =this.props;
        return (
                <div className={classes.ContainerContent} >
                    <div className={classes.ContentHolder}>
                        <div className={classes.CardHolderStyled}>
                            {this.props.articles.articles&&this.props.articles.articles.map((Items,index)=>{
                                const backUrl = '/singleArticle/';
                                return(
                                    <Link  to={{ pathname:backUrl+`${Items.slug}`,state: { index: index}}} key={index}  >
                                        <div className={classes.CardItemStyled} onClick={()=>this.SetSlugItems(Items)} key={index}>
                                            <div className={classes.ImageCardStyled}/>
                                            <div className={classes.TitleHolderCardStyled}>
                                                <p className={classes.TitleCardItemStyled}>
                                                    {Items.title}
                                                </p>
                                            </div>
                                            <div className={classes.AuthorHolderCardStyled} >
                                                <div className={classes.AuthorCardStyled}>
                                                    By: <span>{Items.author.username}</span>, Date:<span> {moment(Items.createdAt).format('DD MMMM YYYY')}</span>
                                                </div>
                                            </div>
                                            <div className={classes.DescriptionHolderCardStyled}>
                                                <p className={classes.DescriptionCardStyled} maxLength="11">
                                                    {Items.body}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                )})}
                        </div>
                        <SideBar/>
                    </div>
                </div>
            );

    }
}
//we can receive some props from redux
const mapStateToProps= (state)=> {
    return {
        articles:state.articleReducer
    }
};
// We can dispatch actions to the reducer and sagas
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchArticle:(slug)=> dispatch(fetchArticleAction(slug))

    }
};
//connect Component to Redux and export this
const ContentBlog= connect(mapStateToProps,mapDispatchToProps)(ContentBlogs);
export default withStyles(styles)(ContentBlog)
