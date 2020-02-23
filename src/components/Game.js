import React, { useState, useEffect } from 'react'

import { generateDeck, regenerateDeck } from './deck'
import Card from './Card'
import ButtonRestart from './ButtonRestart'

function Game({ deckWidth = 6, deckHeight = 3 }) {
  const totalCards = deckWidth * deckHeight

  const [cards, setCards] = useState(generateDeck(totalCards))

  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [isBoardLock, setIsBoardLock] = useState(false) //locking board for other clicks

  const cardIsFlipped = (cardId, isFlipped) => {
    //adding flipped class or not
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
    // show deck at the beginning
    setTimeout(() => {
      for (const card of cards) {
        cardIsFlipped(card.id, false)
        cardCanFlip(card.id, true)
      }
    }, 3000)
  }, [])

  const resetFirstAndSecondCards = () => {
    setTimeout(() => {
      setFirstCard(null)
      setSecondCard(null)

      setIsBoardLock(false)
    }, 1000)
  }

  const successTry = () => {
    cardCanFlip(firstCard.id, false)
    cardCanFlip(secondCard.id, false)

    cardIsFlipped(firstCard.id, true)
    cardIsFlipped(secondCard.id, true)

    resetFirstAndSecondCards()
  }

  const failTry = () => {
    setTimeout(() => {
      cardIsFlipped(firstCard.id, false)
    }, 1000)
    setTimeout(() => {
      cardIsFlipped(secondCard.id, false)
    }, 1200)

    resetFirstAndSecondCards()
  }

  useEffect(() => {
    if (!firstCard || !secondCard) {
      return
    }
    firstCard.imageUrl === secondCard.imageUrl ? successTry() : failTry() //execute function success or fail
  }, [firstCard, secondCard])

  const onCardClick = (card) => {
    ///all clicking events
    if (!card.canFlip) return

    if (!isBoardLock) {
      if (
        (firstCard && card.id === firstCard.id) ||
        (secondCard && card.id === secondCard.id)
      )
        return

      if (firstCard) {
        //updating each cards and locking board
        setSecondCard(card)
        setIsBoardLock(true)
      } else {
        setFirstCard(card)
      }

      cardIsFlipped(card.id, true)
    }
  }

  const restartGame = (cards) => {
    setCards(regenerateDeck(totalCards))
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

  return (
    <>
      <ButtonRestart handleClick={() => restartGame(cards)} />
      <div className='gameboard'>{cardList} </div>
    </>
  )
}

export default Game
