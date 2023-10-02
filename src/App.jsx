import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, i}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
} 

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((_, i) => {
            return (
              <Square
              key={i}
              index={i}>
                
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
