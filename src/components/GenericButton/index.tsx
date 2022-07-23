import React from 'react';
import { Button } from '@mui/material'
import Icon from '@mui/material/Icon';
import './style.scss'

interface Props {
  icon?: any,
  classNames?:string,
  variant?: "text" | "outlined" | "contained" ,
  label?: string,
  disabled?: boolean,
  

  onClick: () => void;

}

const AppButton = ({icon,label, classNames,variant, disabled, onClick}: Props) => {

  // const styles: React.CSSProperties = {

  //  justifyContent:'center',
  //   alignItems: 'center',
  //   fontSize: '0.9rem',
  //   fontWeight: '600',
  //   borderRadius: '30px',
  //   height: 45,
  //   padding: '0 30px',
  //   textTransform: "none",
  //   lineHeight:1,
  //  marginTop:'30px',
  //   width:'300px'
  // };
  const forButton = {
    fontSize: '0.9rem',
    fontWeight: '600',

    borderRadius: "30px",
    padding: "10px 10px",
    textTransform: "none",
   textAlign:'center',
    marginTop: "30px",
    width: "300px",
  };
  return (
    <Button 
      sx={forButton}
     
      variant={variant}
      
      onClick= {onClick}
      disabled= {disabled}
  
      className={classNames}
      
    >
      <Icon component={icon} sx={{ fontSize: '1.2rem' }}/>
     
      {label}
    </Button>
  )
}

export default AppButton