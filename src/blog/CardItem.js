import React,{Component} from 'react';
import {
    AuthorHolderCardStyled,
    CardItemStyled,
    ImageCardStyled, TitleCardItemStyled,
    TitleHolderCardStyled, AuthorCardStyled, DescriptionHolderCardStyled, DescriptionCardStyled
} from "../StyledCoponent/BlogStyled/ContainerContent";


export default class CardItem extends Component{
    render(){
        return (
           <CardItemStyled>
               <ImageCardStyled/>
               <TitleHolderCardStyled>
                   <TitleCardItemStyled> Lorem Ipsum Dolor Sit...</TitleCardItemStyled>
               </TitleHolderCardStyled>
               <AuthorHolderCardStyled>
                   <AuthorCardStyled>
                         By: Jhon Doe, Date: 22 April 2018
                   </AuthorCardStyled>
               </AuthorHolderCardStyled>
               <DescriptionHolderCardStyled>
                   <DescriptionCardStyled>
                       Etiam fermentum ultrices elit vel accumsan. Donec vitae enim se
                   </DescriptionCardStyled>
               </DescriptionHolderCardStyled>
           </CardItemStyled>
        );
    }
}
