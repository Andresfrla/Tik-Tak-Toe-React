import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}


const Square = ({ children, isSelected ,updateBoard, i}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(i)
  }

  return (
    <div 
    onClick={handleClick}
    className={className}>
      {children}
    </div>
  )
} 

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if( 
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a] 
      }
    }
  }

  const updateBoard = (i) => {
    // si tiene algo 
    if(board[i] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    //siempre se tiene que copiar el arreglo para no mutar el estado original
    newBoard[i] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar un ganador

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((_, i) => {
            return (
              <Square
              key={i}
              i={i}
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