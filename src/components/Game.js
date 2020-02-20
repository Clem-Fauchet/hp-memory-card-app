import React from 'react'

import cardImages from './cardImages'
import Card from './Card'

function Game() {
  const cards = cardImages.map((card) => (
    <Card cardUrl={'/static/images/' + card} />
  ))

  return <div className='gameboard'>{cards}</div>
}

export default Game
