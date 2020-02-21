import React, { useState, useEffect } from 'react'

import generateDeck from './deck'
import Card from './Card'

function Game({ deckWidth = 6, deckHeight = 3 }) {
  const totalCards = deckWidth * deckHeight

  const [cards, setCards] = useState(generateDeck(totalCards))
  const [canFlip, setCanFlip] = useState(false)

  const setCardIsFlipped = (cardId, isFlipped) => {
    setCards((prev) =>
      prev.map((c) => {
        return { ...c, isFlipped }
      })
    )
  }

  useEffect(() => {
    setTimeout(() => {
      let index = 0
      for (const card of cards) {
        setTimeout(() => setCardIsFlipped(card.id, false), index++ * 100)
      }
    }, 3000)
  }, [])

  const cardList = cards.map((card, index) => (
    <Card
      key={index}
      id={card.id}
      cardUrl={card.imageUrl}
      // handleClick={}
      {...card}
    />
  ))

  return <div className='gameboard'>{cardList} </div>
}

export default Game
