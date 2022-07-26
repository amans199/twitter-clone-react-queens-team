import React from "react";
import Icons from "./icons.svg"; // Path to your icons.svg
interface Props {
  name?: string,
  color?: string,
  size?: number
}
const AppIcon = ({
  name,
  color,
  size,
}: Props)=> {

  
  return (
    <svg
      className={`icon icon-${name}`}
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

