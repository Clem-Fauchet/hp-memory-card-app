import React, { useEffect } from 'react'

function ButtonRestart({ handleClick }) {
  return (
    <button className='btn-restart' onClick={handleClick}>
      Restart
    </button>
  )
}

export default ButtonRestart
