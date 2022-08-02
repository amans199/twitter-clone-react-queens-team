import React from "react";
import Icons from "./icons.svg"; // Path to your icons.svg
interface Props {
  name: string,
  color?: string,
  size?: number,
  className?:string
}
const AppIcon = ({
  name,
  color,
  size,
  className
}: Props)=> {

  
  return (
    <svg
      className={`icon icon-${name}  ${className}`}
      fill={color}
      width={size}
      height={size}
    
    >
   
      <use xlinkHref={`${Icons}#icon-${name}`}  
      />
    </svg>
  );
}

export default AppIcon;

