import { useState } from 'react';
import SquareBox from './SquareBox';
import './ticTacToe.css';
const TicTacToe = () => {
  const [xIsNext, setXIsNext] = useState(true);

    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i) {
      if (squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  return (
    <>
      <div className="board-row">
        <SquareBox value={squares[0]} onSquareClick={() => handleClick(0)} />
        <SquareBox value={squares[1]} onSquareClick={() => handleClick(1)} />
        <SquareBox value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <SquareBox value={squares[3]} onSquareClick={() => handleClick(3)} />
        <SquareBox value={squares[4]} onSquareClick={() => handleClick(4)} />
        <SquareBox value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <SquareBox value={squares[6]} onSquareClick={() => handleClick(6)} />
        <SquareBox value={squares[7]} onSquareClick={() => handleClick(7)} />
        <SquareBox value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}
export default TicTacToe;
