
export default (theme)=>({
    ContainerSingleContent:({
        width:'100%',
        display: 'grid',
        gridTemplateColumns:' 20% auto 20%',
        background: '#fff',
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns:' 10% auto 10%',

        },
    }),
    ContentHolder:({
        gridColumnStart:2,
        display: 'grid',
        gridTemplateColumns:' 2fr  1fr' ,
    }),
    ArticleHolder:({
        gridColumnStart:1,
        marginTop: '150px',
    }),
    TitleArticleHolder:({
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '50px',
    }),
    TitleArticle:({
        fontSize: '36px',
        color: '#2a2a2a',
        fontFamily: "sans-serif",
        fontWeight:' bold',
        margin:'0px',
    }),
    DateTimeArticle:({
        fontSize: '14px',
        color: '#94a1ac',
        fontFamily: "sans-serif",
        fontWeight: '400',
    }),
    ImageArticle:({
        width: '90%',
        height: '400px',
        backgroundColor: '#ececec'
    }),
    DescriptionArticle:({
        width: '90%',
        marginTop: '49px'
    }),
    HolderUnderArticle:({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginTop: '25px',
    }),
    CommentArticle:({
        display: 'grid',
        gridTemplateColumns:' 1fr',
        marginTop: '25px',
    }),
    SocialHolder:({
        display: 'flex',
        alignItems: 'center',
        gridColumnStart: 1,
    }),
    ImageSocial:({
        width: '25px',
        height: '25px',
    }),
    TagsHolder:({
        display: 'flex',
        alignItems: 'center',
        gridColumnStart: 2,
        // p:'first-child': {
        //     margin: '0',
        // } ,
    }),
    TagTitle:({
        fontFamily: 'sans-serif',
        fontSize: '14px',
    }),
    TagsName:({
        fontSize: '12px',
        fontFamily: 'sans-serif',
        padding: '0 10px',
    }),
    TagNameHolder:({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ececec',
        height: '20px',
        marginLeft: '15px',
    }),
    AuthorHolder:({
        display: 'flex',
        gridColumnStart: 1,
        gridColumnEnd: 3,
        marginTop: '20px'
    }),
    ImageHolder:({
        display: 'flex',
        alignItems: 'center'
    }),
    AuthorNameHolder:({
        width: '100%',
        height: '100px',
        marginLeft: '20px',
    }),
    AuthorImage:({
        width: '180px',
        height: '180px',
        backgroundColor: '#ececec',
        [theme.breakpoints.down('lg')]: {
            width: '100px',
            height: '100px',
        },
    }),
    AuthorName:({
        margin: '0px'
    }),
    AuthorJob:({
        margin: '0px',
        color: '#ababab',
    }),
    AuthorDescription:({
        fontSize: '12px'
    }),
    CommentInputs:({
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:'50px',
     }),
    InputCommentLeft:({
        width:'300px',
        right: '3%'
     }),
    InputComment:({
        marginLeft:'6px',
        width:'300px',
     }),
    CommentTextArea:({
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:'50px',
        width:'640px',
        height:'150px',
        borderRadius:'10px',
        border:'1px solid #ececec',
        padding: '10px 10px'
       }),
    SubmitButton:({
        width: '140px',
        height: '52px',
        borderRadius: '26px',
        backgroundColor: '#3b2eb2',
        marginTop:'10px',

    }),
    ButtonText:({
         fontSize: '14px',
        color: '#ffffff',
        fontFamily: "Montserrat",
        fontWeight: '600',
        textAlign: 'center',
    })
});



