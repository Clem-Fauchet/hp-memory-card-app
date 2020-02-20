import React, { useState } from 'react'

import cardImages from './cardImages'
import Card from './Card'

function Game() {
  const [state, setState] = useState({
    isFlipped: false,
  })

  const flipCard = () => {
    setState({
      ...state,
      isFlipped: !state.isFlipped,
    })
  }

  const cards = cardImages.map((card, index) => (
    <Card
      id={1}
      cardUrl={'static/images/' + card}
      key={index}
      handleClick={() => flipCard()}
      isFlipped={state.isFlipped}
    />
  ))

  return <div className='gameboard'>{cards}</div>
}

export default Game
