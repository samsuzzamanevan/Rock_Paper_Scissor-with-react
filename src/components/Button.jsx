import React from 'react'

function Button({btnText, className, onclick}) {
  return (
    <>
      <button className={`${className}`} onClick={onclick}>{btnText}</button>
    </>
  )
}

export default Button
