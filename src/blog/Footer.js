import React,{Component} from 'react';
import {
    ContainerFooter,
    HolderTitleFooter, SubscribeInput,
    SubTitleFooter,
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
                  <SubscribeInput/>
              </HolderTitleFooter>
          </ContainerFooter>
        );
    }
}
