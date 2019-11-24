//this file contain some code for footer.
// imported style file from
// ```../../StyledCoponent/styledFooter/ContainerFooter```
import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from "../../StyledCoponent/styledFooter/ContainerFooter";
import {Input} from "semantic-ui-react";
import {Button} from "@material-ui/core";

class Footer extends Component{
    render(){
        const {classes} =this.props;
        return (
          <div className={classes.ContainerFooter}>
              <div className={classes.HolderTitleFooter}>
                  <p className={classes.TitleFooter}>
                      Subscribe Our Newsletter
                  </p>
                  <p className={classes.SubTitleFooter}>
                      Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel o
                  </p>
                  <input className={classes.SubscribeInput} placeholder='Enter Email Address'/>
                  <Button className={classes.ButtonStyled}>
                      <p className={classes.TitleButton}>
                        Subscribe
                      </p>
                  </Button>
              </div>
          </div>
        );
    }
}
export default withStyles(styles)(Footer)

