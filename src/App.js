import React,{Component} from 'react';
import styled from 'styled-components'
import Blog from "./blog/Blog";
const StyledContainer = styled.div({

});



class App extends Component {
  render() {

    return (
        <StyledContainer>

          <Blog/>
        </StyledContainer>
    );
  }
}
export default App

