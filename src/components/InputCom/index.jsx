import React from 'react'
import './style.scss'
const InputComp = () => {

  return (

      <form style={{width: "100%"}}>
        <div >
          <input
         
          className="bg-dark text-succes inputStyle"
         
            type="text"
           
            placeholder="Phone, email, or username"
            
          />
        </div>
      </form>
 
  )
}

export default InputComp