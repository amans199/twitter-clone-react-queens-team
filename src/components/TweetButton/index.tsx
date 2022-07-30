
import React from 'react'
import "./style.scss"
interface ButtonProps{
    labal:string,
    className:string
}
function TweetButon({labal,className}:ButtonProps) {
  return (

<button className={`${className} tweet`}  >
{labal}
</button>


  )
}

export default TweetButon