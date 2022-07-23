import React from 'react'

const InputComp = () => {
  const forInput={borderRadius:'4px', fontSize: '0.9rem',
  fontWeight: '600',
  border:'1px solid #657786',

  height: 40,
  padding: ' 30px 10px',
 
  lineHeight:1.5,
width:'300px',
}
  return (
    <>
      <form>
        <div >
          <input
          className="m-3 bg-dark text-succes"
          style={forInput}
            type="text"
           
            placeholder="Phone, email, or username"
            
          />
        </div>
      </form>
    </>
  )
}

export default InputComp