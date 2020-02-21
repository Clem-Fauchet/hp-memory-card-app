import cardImages from './cardImages'
import cloneDeep from 'lodash/cloneDeep'

const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random())
}

let randomId = (max, min) => Math.floor(Math.random() * (max - min) + min)

export default function generateDeck(count) {
  const cards = shuffleArray(cardImages)
    .slice(0, count / 2)
    .map((imageUrl) => ({
      id: randomId(5000, 0),
      imageUrl: '/static/images/' + imageUrl,
      isFlipped: true,
      canFlip: false,
    }))
    .flatMap((oldCards) => [
      oldCards,
      {
        ...cloneDeep(oldCards),
        id: randomId(10000, 5010),
      },
    ])

  return shuffleArray(cards)
}
