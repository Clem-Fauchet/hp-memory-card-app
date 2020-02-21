import cardImages from './cardImages'
import cloneDeep from 'lodash/cloneDeep'

const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random())
}

export default function generateDeck(count) {
  const cards = shuffleArray(cardImages)
    .slice(0, count / 2)
    .map((imageUrl) => ({
      id: Math.floor(Math.random() * Math.floor(100)),
      imageUrl: '/static/images/' + imageUrl,
      isFlipped: true,
      canFlip: true,
    }))
    .flatMap((oldCards) => [oldCards, { ...cloneDeep(oldCards) }])

  return shuffleArray(cards)
}
