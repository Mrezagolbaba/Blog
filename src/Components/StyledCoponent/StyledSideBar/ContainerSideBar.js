

export default (theme)=>({
    SideBarContainer:({
        gridColumnStart:2,
        marginTop: '150px',
    }),
    SearchBarStyled:({
        width: '271px',
        height: '60px',
        borderRadius: '30px',
        backgroundColor: '#ffffff',
        border: '2px solid #e6e6e6',
        outline: 'none',
        padding: '10px',
        marginBottom: '59px',
        [theme.breakpoints.down('lg')]: {
            width: '200px',
            height: '40px',
        },
    }),
    CategoriesHolder:({
        width: '271px',
    }),
    CategoriesItems:({
        fontSize: '16px',
        color: '#666666',
        fontFamily: "Montserrat",
        fontWeight: '400',
        borderBottom: '1px solid #e6e6e6',
        paddingBottom: '5px'
    }),
    TitleCategoriesItems:({
        fontSize: '22px',
        lineHeight: '60px',
        color: '#293039',
        fontFamily: "Montserrat",
        fontWeight: '500'
    }),
    LatestPostsHolder:({
        width: '271px',
        marginTop: '86px'
    }),
    TitleLatestPostsItems:({
        fontSize: '22px',
        color: '#293039',
        fontFamily: "Montserrat",
        fontWeight: '500'
    }),
    LatestPostsItemsHolder:({
        display: 'flex',
        height: '72px',
    }),
    LatestPostsItemsName:({
        fontSize: '16px',
        color: '#666666',
        fontFamily: "Montserrat",
        fontWeight: '400',
        marginLeft: '10px',
        marginBottom: '0px !important',
    }),
    LatestPostsItemsDate:({
        fontSize: '14px',
        letterSpacing: '0px',
        color: '#94a1ac',
        fontFamily: "Montserrat",
        fontWeight: '400',
        marginBottom: '0px!important',
        marginLeft: '10px'
    }),
    LatestPostsTextHolder:({
        display: 'flex',
        flexDirection:'column' ,
    }),
    LatestPostsItemsImage:({
        width:' 74px!important',
        height: '90%',
        backgroundColor: '#e9eef2'
        })


});

