import React from 'react'

import Image from './Image'

function Card({ cardUrl, handleClick, isFlipped }) {
  return (
    <div
      onClick={handleClick}
      className={`memory-card ${isFlipped ? 'flipped ' : ''}`}
    >
      <Image className='front-face' src={cardUrl} alt='card' />
      <Image
        className='back-face'
        src='static/images/back-card.png'
        alt='back'
      />
    </div>
  )
}

export default Card
