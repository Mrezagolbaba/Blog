//this file contain some code for header file and used styled component from
// ```../../StyledCoponent/styledHeader/ContainerHeader```
import React,{Component} from 'react';
import styled from 'styled-components'
import styles from "../../StyledCoponent/styledHeader/ContainerHeader";
import logo from '../../../assets/logo.png'
import { withStyles } from '@material-ui/core/styles';
const ItemStyle=styled.p({
});




class Header extends Component{
    render(){
        const {classes} =this.props;
        return (
            <div className={classes.ContainerHeader}>
                <div className={classes.Wrapper}>
                    <div className={classes.MenuItem}>
                        <p className={classes.ItemHeader}>Home</p>
                        <p className={classes.ItemHeader}>About</p>
                        <p className={classes.ItemHeader}>Screen</p>
                        <p className={classes.ItemHeader}>Contact</p>
                        <button className={classes.Button}  >
                            <ItemStyle> Create Account</ItemStyle>
                        </button>
                    </div>
                    <div className={classes.LogoHolder} >
                        <img className={classes.LogoImage} src={logo} alt={'logo'}/>
                    </div>
                </div>
                <div className={classes.TitleHeader}>Our Blog</div>
            </div>
        );
    }

}
export default withStyles(styles)(Header)
