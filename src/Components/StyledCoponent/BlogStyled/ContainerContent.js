import styled from 'styled-components';
import {device} from "../Responsive/device";
import Montserrat from '../../../assets/montserrat 2/Montserrat-Bold.otf'

export default (theme)=>({
    ContainerContent:{
        with:'100%',
        display: 'grid',
        minWidth: '1280px',
        gridTemplateColumns: '10% auto 10%',
        background: '#fff',
    },
    ContentHolder:({
        gridColumnStart:2,
        display: 'grid',
        gridTemplateColumns: '2fr  1fr' ,
    }),
    CardHolderStyled:({
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gridColumnStart:1,
        gridColumnEnd: 1,
        marginTop: '150px',
        gridColumnGap: '65px',
        gridRowGap:'80px'
    }),
    CardItemStyled:({
        gridColumnStart:1,
        width: '360px',
        minWidth: '260px',
        minHeight: '400px',
        height: '513px',
        borderRadius: '10px',
        boxShadow:  '5px 5px 20px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#ffffff',
        display: 'inline-block',
        [theme.breakpoints.down('lg')]: {
            width: '260px',
            height: '400px',

        },
    }),
    ImageCardStyled:({
        width: '100%',
        height: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: '#e1e1e1',
        [theme.breakpoints.up('xs')]: {
            height : '200px',
            width:'100%',
        },
        [theme.breakpoints.up('xl')]: {
            height: '50%',

        },
        [theme.breakpoints.up('lg')]: {
            height: '50%',

        },
    }),
    TitleHolderCardStyled:({
        display:'flex',
        alignItems:'center',
    }),
    TitleCardItemStyled:({
        fontSize: '22px',
        color: '#293039',
        fontFamily: "Montserrat",
        fontWeight: '500',
        padding:'2px 13px',
        [theme.breakpoints.down('lg')]: {
            fontSize: '20px',

        },
    }),
    AuthorHolderCardStyled:({
        display:'flex',
        alignItems:'center',
    }),
    AuthorCardStyled:({
        fontSize: '14px',
        color: '#94a1ac',
        fontFamily: "Montserrat",
        fontWeight: '500',
        padding:'0px 13px'
    }),
    DescriptionHolderCardStyled:({
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: '100px',
        },
        [theme.breakpoints.up('xl')]: {
            marginTop:'20px'

        },
        [theme.breakpoints.up('lg')]: {
            marginTop:'20px'

        },
    }),
    DescriptionCardStyled:({
        width: '300px',
        height: '112px',
        fontSize: '16px',
        color: '#4e5c66',
        fontFamily: "Montserrat",
        fontWeight: '400',
        padding:'0 15px',
        overflow: 'hidden',
    })
});


