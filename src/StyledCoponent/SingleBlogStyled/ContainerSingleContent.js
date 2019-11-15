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
  //align-items: center;
`;
const TitleArticle=styled.p`
    font-size: 36px;
    line-height: 42px;
    color: #2a2a2a;
    font-family: "Montserrat";
    font-weight: bold; 
`;
const DateTimeArticle=styled.p`
    font-size: 14px;
    color: #94a1ac;
    font-family: "Montserrat";
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
    
`

export {
    ContainerSingleContent ,
    ContentHolder,
    ArticleHolder,
    TitleArticleHolder,
    TitleArticle,
    DateTimeArticle,
    ImageArticle,
    DescriptionArticle
}
