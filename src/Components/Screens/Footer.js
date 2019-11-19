import React,{Component} from 'react';
import {
    ButtonStyled,
    ContainerFooter,
    HolderTitleFooter, SubscribeInput,
    SubTitleFooter, TitleButton,
    TitleFootr
} from "../StyledCoponent/styledFooter/ContainerFooter";

export default class Footer extends Component{
    render(){
        return (
          <ContainerFooter>
              <HolderTitleFooter>
                  <TitleFootr>
                      Subscribe Our Newsletter
                  </TitleFootr>
                  <SubTitleFooter>
                      Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel o
                  </SubTitleFooter>
                  <SubscribeInput placeholder='Enter Email Address'/>
                  <ButtonStyled>
                      <TitleButton>
                        Subscribe
                      </TitleButton>
                  </ButtonStyled>
              </HolderTitleFooter>
          </ContainerFooter>
        );
    }
}
