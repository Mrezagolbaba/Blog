import React,{Component} from 'react';
import {Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {
    CategoriesHolder,
    CategoriesItems,
    LatestPostsHolder,
    LatestPostsItemsDate,
    LatestPostsItemsHolder, LatestPostsItemsImage,
    LatestPostsItemsName,
    LatestPostsTextHolder,
    SearchBarStyled,
    SideBarContainer,
    TitleCategoriesItems,
    TitleLatestPostsItems
} from "../StyledCoponent/StyledSideBar/ContainerSideBar";


export default class SideBar extends Component{
    render(){
        return (
            <SideBarContainer>
                <SearchBarStyled icon='search' placeholder='Search...' />
                <CategoriesHolder>
                    <TitleCategoriesItems>Categories</TitleCategoriesItems>
                    <CategoriesItems>Bathrooms</CategoriesItems>
                    <CategoriesItems>Kitchen Rooms</CategoriesItems>
                    <CategoriesItems>Bedrooms</CategoriesItems>
                    <CategoriesItems>Drawing Rooms</CategoriesItems>
                    <CategoriesItems>Duplex Home</CategoriesItems>
                    <CategoriesItems>Categories</CategoriesItems>
                </CategoriesHolder>
                <LatestPostsHolder>
                    <TitleLatestPostsItems>Latest Posts</TitleLatestPostsItems>
                    <LatestPostsItemsHolder>
                        <LatestPostsItemsImage/>
                        <LatestPostsTextHolder>
                            <LatestPostsItemsName>Vestibulum Commodo Magna Est Tempus Eros Auctor.</LatestPostsItemsName>
                            <LatestPostsItemsDate>Post 30 Mar, 18</LatestPostsItemsDate>
                        </LatestPostsTextHolder>
                    </LatestPostsItemsHolder>
                    <LatestPostsItemsHolder>
                        <LatestPostsItemsImage/>
                        <LatestPostsTextHolder>
                            <LatestPostsItemsName>Vestibulum Commodo Magna Est Tempus Eros Auctor.</LatestPostsItemsName>
                            <LatestPostsItemsDate>Post 30 Mar, 18</LatestPostsItemsDate>
                        </LatestPostsTextHolder>
                    </LatestPostsItemsHolder>
                    <LatestPostsItemsHolder>
                        <LatestPostsItemsImage/>
                        <LatestPostsTextHolder>
                            <LatestPostsItemsName>Vestibulum Commodo Magna Est Tempus Eros Auctor.</LatestPostsItemsName>
                            <LatestPostsItemsDate>Post 30 Mar, 18</LatestPostsItemsDate>
                        </LatestPostsTextHolder>
                    </LatestPostsItemsHolder>
                    <LatestPostsItemsHolder>
                        <LatestPostsItemsImage/>
                        <LatestPostsTextHolder>
                            <LatestPostsItemsName>Vestibulum Commodo Magna Est Tempus Eros Auctor.</LatestPostsItemsName>
                            <LatestPostsItemsDate>Post 30 Mar, 18</LatestPostsItemsDate>
                        </LatestPostsTextHolder>
                    </LatestPostsItemsHolder>
                </LatestPostsHolder>

            </SideBarContainer>
        );
    }
}
