import styled from 'styled-components';
import {device} from "../Responsive/device";

const  ContainerFooter= styled.div`
    width:100%;
    height: 740px;
    min-width: 1280px;
    display: grid;
    margin-top: 165px;
    grid-template-columns: 40% auto 40%; 
   background: linear-gradient(-30deg, #2f23ad 0%, #c96dd7 99%);
     @media ${device.laptop} {
      grid-template-columns: 30% auto 30%;  
    }
`;
const HolderTitleFooter=styled.div`
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const TitleFootr=styled.p`
    font-size: 36px;
    color: #ffffff;
    font-family: "Montserrat";
    font-weight: bold;
    text-align: center;
`;
const SubTitleFooter=styled.p`
    font-size: 16px;
    color: #ffffff;
    font-family: "Montserrat";
    font-weight: 400;
`;
const SubscribeInput=styled.input`
    width: 80%;
    height: 70px;
    border-radius: 35px;
    background-color: #ffffff;
    margin-top: 76px;
    outline: none;
     font-size: 16px;
    color: #ececec;
    font-family: "Montserrat";
    font-weight: 400;
    padding: 0 10px;
    
`;
const ButtonStyled=styled.div`
    width: 190px;
    height: 60px;
    border-radius: 30px;
    background-color: #3b2eb2;
    position: absolute;
    z-index: 5;
    margin-top: 20%;
    right: 11%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.laptop} {
      width: 30%; 
    } 
    @media ${device.laptopL} {
       margin-top: 13%;
    }
     @media ${device.desktop} {
      margin-top: 13%;
    }
    
`;
const TitleButton=styled.p`
    font-size: 16px;
    color: #ffffff;
    font-family: "Montserrat";
    font-weight: 400;
    
`

export {
    ContainerFooter,
    HolderTitleFooter,
    TitleFootr,
    SubTitleFooter,
    SubscribeInput,
    ButtonStyled,
    TitleButton
}
