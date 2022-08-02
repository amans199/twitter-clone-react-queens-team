
import React from 'react'
import "./style.scss"
interface ButtonProps{
    labal:string,
    className?:string,
    onClick?:() => void;
}
function TweetButon({labal,className,onClick}:ButtonProps) {
  return (

<button className={`${className} tweet`}  onClick={onClick} >
{labal}
</button>


  )
}

export default TweetButon