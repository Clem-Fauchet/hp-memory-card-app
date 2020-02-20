import React, { useState, useEffect } from 'react'

import generateDeck from './deck'
import Card from './Card'

function Game({ deckWidth = 6, deckHeight = 3 }) {
  const totalCards = deckWidth * deckHeight

  const [cards, setCards] = useState(generateDeck(18))
  const [flipped, setFlipped] = useState({
    isFlipped: false,
  })

  const flipCard = () => {
    setFlipped({
      ...flipped,
      isFlipped: !flipped.isFlipped,
    })
  }

  const cardList = cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      cardUrl={card.imageUrl}
      handleClick={() => flipCard()}
      isFlipped={flipped.isFlipped}
    />
  ))

  return <div className='gameboard'>{cardList} </div>
}

export default Game
