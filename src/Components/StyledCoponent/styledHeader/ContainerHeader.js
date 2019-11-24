import styled from 'styled-components';
import {device} from "../Responsive/device";

export default (theme)=>({
    ContainerHeader:({
        width:'100%',
        minWidth: '1280px',
        display: 'grid',
        gridTemplateColumns: '20% auto 20%',
        background: 'linear-gradient(-30deg, #2e23a6 0%, #c069ce 99%)'
    }),
    Wrapper:({
        gridColumnStart:1,
        display: 'grid',
        gridTemplateColumns:'1fr 1fr',
        gridTemplateRows:'0.5fr 1fr ',
        width:'100vw',
        height:'450px',
        color:'#fff',
    }),
    MenuItem:({
        display: 'flex',
        fontSize: '18px',
        fontWeight: '500',
        color:'#fff',
        alignItems:'center',
        gridColumnStart:2,

    }),
    ItemHeader:({
        padding:'10px 10px',
        marginBottom: '0'
    }),
    LogoHolder:({
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        gridColumnStart:1,
        gridRowStart: 1,
    }),
    LogoImage:({
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    }),
    Button:({
        width: '200px',
        height: '60px',
        borderRadius: '30px',
        backgroundColor: 'transparent',
        border: '2px solid #ffffff',
        marginLeft:'20px',
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
        outline: 'none',
        // & p {
        fontSize: '18px',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontWeight: '500',
        padding:'0',
// }
    }),
    TitleHeader:({
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
        fontSize: '36px',
        color: '#ffffff',
        fontWeight: 'bold',
    })
});



const  ContainerHeader= styled.div`
    width:100%;
    min-width: 1280px;
    display: grid;
    grid-template-columns: 20% auto 20%; 
    background: linear-gradient(-30deg, #2e23a6 0%, #c069ce 99%);
`;
const Wrapper= styled.div`
    grid-column-start:1;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:0.5fr 1fr ;
    width:100vw;
    height:450px;
    color:#fff;  
`;
const MenuItem= styled.div`
        display: flex;
        font-size: 18px;
        font-weight: 500;
        color:#fff;
        align-Items:center;
        grid-column-start:2;
        & p{
            padding:10px 10px;
            margin-bottom: 0;
            
        }
    `;
const LogoHolder=styled.div`
   display: flex;
   align-Items:center;
   justify-content: center;
     grid-column-start:1;
    grid-row-start: 1;
`;
const LogoImage=styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
    TitleHeader,
    Wrapper,
    ContainerHeader,
    LogoHolder,
    LogoImage


}

