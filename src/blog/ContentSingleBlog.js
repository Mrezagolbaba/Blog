import React,{Component} from 'react';
import {
    ContentHolder, DateTimeArticle, DescriptionArticle, ImageArticle,
    TitleArticle,
    TitleArticleHolder
} from "../StyledCoponent/SingleBlogStyled/ContainerSingleContent";
import SideBar from "./SideBar";
import {ArticleHolder, ContainerSingleContent} from "../StyledCoponent/SingleBlogStyled/ContainerSingleContent";


export default class ContentSingleBlog extends Component{
    render(){
        return (
            <ContainerSingleContent>
                <ContentHolder>
                    <ArticleHolder>
                        <TitleArticleHolder>
                            <TitleArticle>
                                Duplex home purchase for future
                            </TitleArticle>
                            <DateTimeArticle>
                                By: Jhon Doe, Date: 22 April 2018
                            </DateTimeArticle>
                        </TitleArticleHolder>
                        <ImageArticle/>
                        <DescriptionArticle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nulla porttitor massa id neque aliquam vestibulum. Pellentesque nec nam aliquam sem et tortor. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Amet porttitor eget dolor morbi non arcu risus. Risus pretium quam vulputate dignissim suspendisse in est ante. Nunc consequat interdum varius sit amet mattis vulputate. Magna ac placerat vestibulum lectus mauris ultrices. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.
                            Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Justo donec enim diam vulputate ut pharetra sit. Natoque penatibus et magnis dis. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Semper auctor neque vitae tempus quam pellentesque nec. Ut consequat semper viverra nam libero. Pulvinar mattis nunc sed blandit libero. Tristique senectus et netus et malesuada fames ac turpis egestas. Lobortis feugiat vivamus at augue eget arcu dictum varius. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Ultricies tristique nulla aliquet enim. Ultricies lacus sed turpis tincidunt id. Dictum varius duis at consectetur. Consequat semper viverra nam libero justo laoreet. Cras semper auctor neque vitae tempus. Morbi tristique senectus et netus et malesuada.
                        </DescriptionArticle>
                    </ArticleHolder>
                    <SideBar/>
                </ContentHolder>
            </ContainerSingleContent>
        );
    }
}
