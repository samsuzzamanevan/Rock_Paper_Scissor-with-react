import React from 'react'

function Peragraph({pText, className}) {
  return (
    <>
      <p className={`${className}`}>{pText}</p>
    </>
  )
}

export default Peragraph
