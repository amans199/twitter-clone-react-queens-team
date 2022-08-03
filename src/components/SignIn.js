import React from "react";
import { Button ,Box,Avatar} from '@mui/material';
import Icon from '@mui/material/Icon';
import './SignIn.scss';

const SignIn = () => {
    return (
        <Box variant="outlined" >
        <Button  href="#contained-buttons "  sx={{
    color: '#fff';
  }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <span>sign in as Ahmed</span>
        <Icon></Icon>       
       </Button>

       <Button className="BTN" href="#contained-buttons">
        <span>sign in as Ahmed</span>
        <Icon></Icon>       
       </Button>
        </Box>
    )
    
      
}
 
export default SignIn;