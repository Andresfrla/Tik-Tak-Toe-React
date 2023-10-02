import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}


const Square = ({ children, isSelected ,updateBoard, i}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = (e) => {
    updateBoard()
  }

  return (
    <div 
    onClick={handleClick}
    className={className}>
      {children}
    </div>
  )
} 

const updateBoard = () => {
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((_, i) => {
            return (
              <Square
              key={i}
              index={i}
              updateBoard={updateBoard}
              >
                {board[i]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
