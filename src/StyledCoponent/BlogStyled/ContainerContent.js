import styled from 'styled-components';
import {device} from "../Responsive/device";

const  ContainerContent= styled.div`
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
const CardHolderStyled=styled.div`
       display:flex;
       grid-column-start:1;
       margin-top: 150px;
`;
const CardItemStyled=styled.div`
    grid-column-start:1;
    width: 360px;
    height: 513px;
    border-radius: 10px;
    filter: drop-shadow(0px 25px 27.5px rgba(0,0,0,0.1));
    background-color: #ffffff;
    margin-right: 45px;
    margin-bottom: 80px;
     @media ${device.laptop} { 
         width: 260px;
          height: 400px;
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
  
`;
const DescriptionCardStyled=styled.p`
     width: 300px;
    height: 72px;
    font-size: 16px;
    color: #4e5c66;
    font-family: "Montserrat";
    font-weight: 400;
     padding:0 30px
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
