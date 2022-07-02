import React from 'react'

const InputComp = () => {
  return (
    <>
      <form>
        <div className="m-3">
          <input
            type="text"
            class="form-control"
            placeholder="Phone, email, or username"
            id="inputComponent"
          />
        </div>
      </form>
    </>
  )
}

export default InputComp