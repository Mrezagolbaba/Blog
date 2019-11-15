import React,{Component} from 'react';
import styled from 'styled-components'
import Wrapper from "../StyledCoponent/styledHeader/Wrapper";
import {MenuItem, Button, TitleHeader} from "../StyledCoponent/styledHeader/MenuItem";
import ContainerHeader from "../StyledCoponent/styledHeader/ContainerHeader";
const ItemStyle=styled.p({
});




export default class Header extends Component{
    render(){
        return (
            <ContainerHeader>
                 <Wrapper>
                     <MenuItem>
                    <ItemStyle>Home</ItemStyle>
                    <ItemStyle>About</ItemStyle>
                    <ItemStyle>Screen</ItemStyle>
                    <ItemStyle>Contact</ItemStyle>
                    <Button>
                        <ItemStyle> Create Account</ItemStyle>
                    </Button>
                </MenuItem>
                 </Wrapper>
                <TitleHeader>Our Blog</TitleHeader>
            </ContainerHeader>
        );
    }

}
