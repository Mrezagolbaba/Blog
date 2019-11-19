import styled from "styled-components";
import {device} from "../Responsive/device";

const  ContainerSingleContent= styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 20% auto 20%; 
    background: #fff;
     @media ${device.laptop} { 
      grid-template-columns: 10% auto 10%;  
    }
`;
const ContentHolder=styled.div`
  grid-column-start:2;
    display: grid;
    grid-template-columns: 2fr  1fr ;
`;
const ArticleHolder=styled.div`
  grid-column-start:1;
  margin-top: 150px;

`;
const TitleArticleHolder=styled.div`
  display: flex;
  flex-direction: column;
   margin-bottom: 50px;
  //align-items: center;
`;
const TitleArticle=styled.p`
    font-size: 36px;
    color: #2a2a2a;
    font-family: "sans-serif";
    font-weight: bold; 
    margin:0px;
`;
const DateTimeArticle=styled.p`
    font-size: 14px;
    color: #94a1ac;
    font-family: "sans-serif";
    font-weight: 400;
   
`;
const ImageArticle=styled.img`
    width: 90%;
    height: 400px;
    background-color: #000000;
`;
const DescriptionArticle=styled.div`
    width: 90%;
    margin-top: 49px;
    
`;
const HolderUnderArticle=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
`;
const CommentArticle=styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 25px;
`;
const SocialHolder=styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 1;
`;
const ImageSocial=styled.img`
  width: 25px;
  height: 25px;
  //background-color: #09d3ac;
  
`
const TagsHolder=styled.div`
  display: flex;
    align-items: center;
  grid-column-start: 2;
  p:first-child {
  margin: 0;
  }
`;
const TagTitle=styled.p`
  font-family: sans-serif;
  font-size: 14px;
`;
const TagsName=styled.p`
  font-size: 12px;
  font-family: sans-serif;
  padding: 0 10px;
`;
const TagNameHolder=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ececec;
  height: 20px;
  margin-left: 15px;
`;
const AuthorHolder=styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 20px;
`;
const ImageHolder=styled.div`
display: flex;
align-items: center;
`;
const AuthorNameHolder=styled.div`
  width: 100%;
  height: 100px;
  margin-left: 20px;
`;
const AuthorImage=styled.img`
    width: 180px;
    height: 180px;
    background-color: #ececec;
     @media ${device.laptop} { 
        width: 100px;
       height: 100px;
     
    }
`;
const AuthorName=styled.p`
  margin: 0px;
  
`;
const AuthorJob=styled.p`
    margin: 0px;
    color: #ababab;

`;
const AuthorDescription=styled.p`
font-size: 12px;
 
`;


export {
    ContainerSingleContent ,
    ContentHolder,
    ArticleHolder,
    TitleArticleHolder,
    TitleArticle,
    DateTimeArticle,
    ImageArticle,
    DescriptionArticle,
    HolderUnderArticle,
    SocialHolder,
    TagsHolder,
    ImageSocial,
    TagTitle,
    TagsName,
    TagNameHolder,
    AuthorHolder,
    ImageHolder,
    AuthorNameHolder,
    AuthorImage,
    AuthorDescription,
    AuthorJob,
    AuthorName,
    CommentArticle
}
