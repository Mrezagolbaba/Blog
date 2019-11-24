
import React,{Component} from 'react';
import {Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import styles from "../../StyledCoponent/StyledSideBar/ContainerSideBar";
import { withStyles } from '@material-ui/core/styles';
import {fetchArticleAction} from "../../../Redux/actions";
import {connect} from "react-redux";
import {TitleCardItemStyled} from "../../StyledCoponent/BlogStyled/ContainerContent";
import moment from "moment";


class SideBarComponent extends Component{
    render(){
        const {classes} =this.props;
        return (
            <div className={classes.SideBarContainer}>
                <input className={classes.SearchBarStyled} placeholder='Search...' />
                <div className={classes.CategoriesHolder} >
                    <p className={classes.TitleCategoriesItems}>Categories</p>
                    <p className={classes.CategoriesItems}>Bathrooms</p>
                    <p className={classes.CategoriesItems}>Kitchen Rooms</p>
                    <p className={classes.CategoriesItems}>Bedrooms</p>
                    <p className={classes.CategoriesItems}>Drawing Rooms</p>
                    <p className={classes.CategoriesItems}>Duplex Home</p>
                    <p className={classes.CategoriesItems}>Categories</p>
                </div>
                <div className={classes.LatestPostsHolder}>
                    <p className={classes.TitleLatestPostsItems}>Latest Posts</p>
                    {this.props.articles.articles&&this.props.articles.articles.map((Items,index)=>{
                        return(
                            <div className={classes.LatestPostsItemsHolder}>
                                <div className={classes.LatestPostsItemsImage}/>
                                <div className={classes.LatestPostsTextHolder} >
                                    <p className={classes.LatestPostsItemsName}>{Items.title}</p>
                                    <p className={classes.LatestPostsItemsDate}><span>Post</span>{moment(Items.createdAt).format('DD MMMM YYYY')}</p>
                                </div>
                            </div>
                        )})}
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
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchArticle:(slug)=> dispatch(fetchArticleAction(slug))

    }
};
const SideBar= connect(mapStateToProps,mapDispatchToProps)(SideBarComponent);
export default withStyles(styles)(SideBar)
