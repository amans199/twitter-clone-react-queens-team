import React from 'react'
import './icons.svg'
function AppIcon(props:any) {
  return (
    <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
  )
}

export default AppIcon