import React,{Component} from 'react';
import styled from 'styled-components'
import Wrapper from "../StyledCoponent/Wrapper";
import {MenuItem, Button, TitleHeader} from "../StyledCoponent/MenuItem";
import Container from "../StyledCoponent/Container";
const ItemStyle=styled.p({
});




export default class Header extends Component{
    render(){
        return (
            <Container>
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
            </Container>
        );
    }

}
