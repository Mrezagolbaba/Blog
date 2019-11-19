    import styled from 'styled-components';
    import {device} from "../Responsive/device";

    const MenuItem= styled.div`
        display: flex;
        font-size: 18px;
        font-weight: 500;
        color:#fff;
        align-Items:center;
        grid-column-start:2;
        & p{
            padding:10px 10px;
            
        }
    `;
    const Button= styled.button`
       width: 200px;
       height: 60px;
       border-radius: 30px;
       background-color: transparent;
       border: 2px solid #ffffff;
       margin-left:20px;
       align-items: center;
      justify-content: center;
      display:flex;
      outline: none;
        & p {
        font-size: 18px;
        color: #ffffff;
        font-family: "Montserrat";
        font-weight: 500;
        padding:0;
        }
      @media ${device.laptop} {
         width: 175px;
         height: 50px;
    }
    `;
    const TitleHeader=styled.div`
       align-items: center;
      justify-content: center;
      display:flex;
      font-size: 36px;
      color: #ffffff;
      font-weight: bold;
    `;


    export {
        MenuItem,
        Button,
        TitleHeader

    }

