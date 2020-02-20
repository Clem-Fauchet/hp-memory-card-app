import React from 'react'
import './styles/App.scss'

// import Game from './components/Game'

function App() {
  return (
    <div className='App'>
      <div className='playground'>
        <h1>Memory Card</h1>
        <h2>Can you remember where the cards are?</h2>
        <div className='gameboard'>
          <div className='memory-card'>
            <img
              className='front-face'
              src='/images/harry-card.png'
              alt='hp card'
            />
            <img className='back-face' src='/images/back-card.png' alt='back' />
          </div>

          <div className='memory-card'>
            <img
              className='front-face'
              src='/images/hermione-card.png'
              alt='hermione card'
            />
            <img className='back-face' src='/images/back-card.png' alt='back' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
