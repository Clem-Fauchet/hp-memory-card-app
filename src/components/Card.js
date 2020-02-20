import React from 'react'

function Card({ cardUrl }) {
  return (
    <div className='memory-card'>
      <img className='front-face' src={cardUrl} alt='card' />
      <img className='back-face' src='/images/back-card.png' alt='back' />
    </div>
  )
}

export default Card
