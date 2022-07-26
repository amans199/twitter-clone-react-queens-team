import React from 'react';
import { Button } from '@mui/material'
 import AppIcon from '../AppIcons';

interface Props {
  iconName?:string,
  iconSize?:number,
  classNames?:string,
  variant?: "text" | "outlined" | "contained" ,
  label?: string,
  disabled?: boolean,
  onClick: () => void;
}
const AppButton = ({iconName,iconSize,label, classNames,variant, disabled, onClick}: Props) => {
  const forButton = {
    fontSize: '1rem',
    fontWeight: '600',
    display:'flex',
   alignItems: "center",
   justifyContent: "center",
    borderRadius: "30px",
    padding: "10px 10px",
    textTransform: "none",
     marginTop: "30px",
    width: "100%",
  }
 return (
    <Button 
      sx={forButton}
      variant={variant}
      onClick= {onClick}
      disabled= {disabled}
      className={classNames}
      >
   <span>
      {iconName&&<AppIcon name={iconName} size={iconSize}/>}
     </span>
   <span >
   {label}
   </span>
    </Button>
  )
}
export default AppButton