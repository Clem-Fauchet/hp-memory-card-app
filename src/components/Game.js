import React, { useState, useEffect } from 'react'

import generateDeck from './deck'
import Card from './Card'

function Game({ deckWidth = 6, deckHeight = 3 }) {
  const totalCards = deckWidth * deckHeight

  const [cards, setCards] = useState(generateDeck(totalCards))
  const [canFlip, setCanFlip] = useState(false)

  const cardIsFlipped = (cardId, isFlipped) => {
    setCards((prev) =>
      prev.map((item) => {
        if (item.id !== cardId) {
          return item
        }
        return { ...item, isFlipped }
      })
    )
  }

  const cardCanFlip = (cardId, canFlip) => {
    setCards((prev) =>
      prev.map((item) => {
        if (item.id !== cardId) {
          return item
        }
        return { ...item, canFlip }
      })
    )
  }

  useEffect(() => {
    setTimeout(() => {
      for (const card of cards) {
        cardIsFlipped(card.id, false)
      }
      setCanFlip(true)
    }, 3000)
  }, [])

  const onCardClick = (card) => {
    cardIsFlipped(card.id, true) //true donc add flipped card
  }

  const cardList = cards.map((card, index) => (
    <Card
      key={index}
      id={card.id}
      cardUrl={card.imageUrl}
      handleClick={() => onCardClick(card)}
      {...card}
    />
  ))

  return <div className='gameboard'>{cardList} </div>
}

export default Game
