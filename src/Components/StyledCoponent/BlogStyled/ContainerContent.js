import styled from 'styled-components';
import {device} from "../Responsive/device";

const  ContainerContent= styled.div`
    width:100%;
    display: grid;
    min-width: 1280px;
    grid-template-columns: 10% auto 10%;  
    background: #fff;
   
`;
const ContentHolder=styled.div`
  grid-column-start:2;
    display: grid;
    grid-template-columns: 2fr  1fr ;
`;
const CardHolderStyled=styled.div`
       display:grid;
       grid-template-columns: 1fr 1fr;
       grid-column-start:1;
       grid-column-end: 1;
       margin-top: 150px;
       grid-column-gap: 100px;
`;
const CardItemStyled=styled.div`
    grid-column-start:1;
    width: 360px;
    min-width: 260px;
    min-height: 400px;
    height: 513px;
    border-radius: 10px;
    filter: drop-shadow(0px 25px 27.5px rgba(0,0,0,0.1));
    background-color: #ffffff;
    margin-right: 45px;
    margin-bottom: 80px;
     display: inline-block;
     @media ${device.laptop} { 
         width: 260px;
          height: 400px;
    } 
    @media ${device.laptopL} { 
          width: 360px;
          height: 513px;
    }@media ${device.desktop} { 
          width: 360px;
          height: 513px;
    }
`;
const ImageCardStyled=styled.div`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #e1e1e1;
     @media ${device.laptop} { 
        height : 200px;
    }
    @media ${device.laptopL} { 
          height: 50%;
    }@media ${device.desktop} { 
          height:50%;
    }
`;
const TitleHolderCardStyled=styled.div`
    display:flex;
    align-items:center;   
`;
const TitleCardItemStyled=styled.p`
    font-size: 22px;
    color: #293039;
    font-family: "Montserrat";
    font-weight: 500;
     padding:2px 30px
`;
const AuthorHolderCardStyled=styled.div`
    display:flex;
    align-items:center;
`;
const AuthorCardStyled=styled.div`
    font-size: 14px;
    color: #94a1ac;
    font-family: "Montserrat";
    font-weight: 400;
     padding:0 30px
`;
const DescriptionHolderCardStyled=styled.div`
    display:flex;
    align-items:center;
     @media ${device.laptopL} { 
          margin-top:10px
    }@media ${device.desktop} { 
         margin-top:10px

    }
  
`;
const DescriptionCardStyled=styled.p`
     width: 300px;
    height: 100px;
    font-size: 16px;
    color: #4e5c66;
    font-family: "Montserrat";
    font-weight: 400;
     padding:0 30px;
     overflow: hidden;
`;





export {
    ContainerContent,
    ContentHolder,
    CardItemStyled,
    ImageCardStyled,
    TitleHolderCardStyled,
    TitleCardItemStyled,
    AuthorHolderCardStyled,
    AuthorCardStyled,
    DescriptionHolderCardStyled,
    DescriptionCardStyled,
    CardHolderStyled,
}
