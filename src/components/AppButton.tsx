import React from 'react';
import { Button } from '@mui/material'
import Icon from '@mui/material/Icon';

interface Props {
  icon?: any,
  variant?: "text" | "outlined" | "contained" | undefined,
  label?: string,
  disabled?: boolean,
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
  onClick: () => void;
}

const AppButton = ({label, icon, variant, disabled, color, onClick}: Props) => {

  const styles: React.CSSProperties = {
    justifyContent:'center',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: '600',
    borderRadius: '30px',
    height: 40,
    padding: '0 30px',
    textTransform: "none",
    lineHeight:1
  };
  return (
    <Button 
      style={styles}
      variant={variant}
      color ={color}
      onClick= {onClick}
      disabled= {disabled}
    >
      <Icon component={icon} sx={{ fontSize: '1.2rem' }}/>
      {label}
    </Button>
  )
}

export default AppButton