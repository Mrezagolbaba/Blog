import styled from "styled-components";
import {device} from '../Responsive/device';


const SideBarContainer=styled.div`
    grid-column-start:2;
      margin-top: 150px;


`;
const SearchBarStyled=styled.input`
  width: 271px;
  height: 60px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 2px solid #e6e6e6;
  outline: none;
  padding: 10px;
  margin-bottom: 59px;
   @media ${device.laptop} { 
       width: 200px;
      height: 40px;
   }
  
`;
const CategoriesHolder=styled.div`
  width: 271px;

`;
const CategoriesItems=styled.p`
    font-size: 16px;
    color: #666666;
    font-family: "Montserrat";
    font-weight: 400;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 5px;
`;
const TitleCategoriesItems=styled.p`
    font-size: 22px;
    line-height: 60px;
    color: #293039;
    font-family: "Montserrat";
    font-weight: 500;

`;
const LatestPostsHolder=styled.div`
  width: 271px;
  margin-top: 86px;

`;
const TitleLatestPostsItems=styled.p`
    font-size: 22px;
    color: #293039;
    font-family: "Montserrat";
    font-weight: 500;
`;
const LatestPostsItemsHolder=styled.div`
   display: flex;
   //width: 330px;
   height: 72px;
`;
const LatestPostsItemsName=styled.p`
    font-size: 16px;
    color: #666666;
    font-family: "Montserrat";
    font-weight: 400;
    margin-left: 10px;
     margin-bottom: 0px;!important;


`;
const LatestPostsItemsDate=styled.p`
    font-size: 14px;
    letter-spacing: 0px;
    color: #94a1ac;
    font-family: "Montserrat";
    font-weight: 400;
    margin-bottom: 0px;!important;
    margin-left: 10px;
`;
const LatestPostsTextHolder=styled.div`
   
`;
const LatestPostsItemsImage=styled.img`
    width: 120px;!important;
    height: 90%;
    background-color: #e9eef2;
`;

export {
    SideBarContainer,
    SearchBarStyled,
    TitleCategoriesItems,
    CategoriesHolder,
    CategoriesItems,
    LatestPostsHolder,
    TitleLatestPostsItems,
    LatestPostsItemsName,
    LatestPostsItemsHolder,
    LatestPostsItemsDate,
    LatestPostsTextHolder,
    LatestPostsItemsImage
}
