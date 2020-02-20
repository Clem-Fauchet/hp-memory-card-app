import React from 'react'
import './styles/App.scss'

import Game from './components/Game'

function App() {
  return (
    <div className='App'>
      <h4>*The art doesn't belong to me</h4>
      <div className='playground'>
        <h1>Memory Card</h1>
        <Game />
      </div>
    </div>
  )
}

export default App
