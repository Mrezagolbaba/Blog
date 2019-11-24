
export default (theme)=>({
    ContainerFooter:({
        width:'100%',
        height: '740px',
        minWidth: '1280px',
        display: 'grid',
        marginTop: '165px',
        gridTemplateColumns:' 40% auto 40%',
        background: 'linear-gradient(-30deg, #2f23ad 0%, #c96dd7 99%)',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns:' 30% auto 30%',
       },
}),
    HolderTitleFooter:({
        gridColumnStart: 2,
        display: 'flex',
        flexDirection:' column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    }),
    TitleFooter:({
        fontSize: '36px',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontWeight: 'bold',
        textAlign: 'center'
    }),
    SubTitleFooter:({
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontWeight: '400',
    }),
    SubscribeInput:({
        width: '80%',
        height: '70px',
        borderRadius: '35px',
        backgroundColor: '#ffffff',
        marginTop: '76px',
        outline: 'none',
        fontSize: '16px',
        color: '#ececec',
        fontFamily: "Montserrat",
        fontWeight: '400',
        padding: '0 10px',
    }),
    ButtonStyled:({
        width: '190px',
        height: '60px',
        borderRadius: '30px',
        backgroundColor: '#3b2eb2',
        position: 'absolute',
        zIndex: 5,
        marginTop: '20%',
        right: '11%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('lg')]: {
            width: '30%',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '13%',
        },
     }),
    TitleButton:({
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontWeight: '400'
    })

});
