import React, { useState } from "react";
import "./styles.css";
import notebookImage from "./notebook.png";

function Square({ value, isWinningCombo, onSquareClick }) {
  return (
    <button className={`square ${isWinningCombo ? "winning" : ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, winningCombo, status }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
      <div>
      <div className="status">{status}</div>
      {/* <div className="game">
        <div className="game-board"> */}
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWinningCombo={winningCombo.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWinningCombo={winningCombo.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWinningCombo={winningCombo.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWinningCombo={winningCombo.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWinningCombo={winningCombo.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWinningCombo={winningCombo.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWinningCombo={winningCombo.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWinningCombo={winningCombo.includes(7)} />
          <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWinningCombo={winningCombo.includes(8)} />
      </div>
    </div>
    // </div>
    // </div>
 
  );
}

export default function Game() {
  const [winningCombo, setWinningCombo] = useState([]);
  const [gameResult, setGameResult] = useState("Next Player: X");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    function isBoardFull(squares) {
      return squares.every((square) => square !== null);
    }

    const winnerInfo = calculateWinner(nextSquares);
    let status;
    if (winnerInfo) {
      setWinningCombo(winnerInfo.winningCombo);
      setGameResult("Winner: " + winnerInfo.winner);
    } else if (isBoardFull(nextSquares)) {
      setWinningCombo([]);
      setGameResult("It's a draw!");
    } else {
      setWinningCombo([]);
      setGameResult("Next Player: " + (xIsNext ? "O" : "X"));
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setWinningCombo([]);
    setGameResult("");
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div  style={{
      backgroundImage: `url(${notebookImage})`, 
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: '800px',
      width: '1450px'}}>
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winningCombo={winningCombo}
        />
      </div>
      <div className="game-info">
        <div className="status">{gameResult}</div>
        <ol>{moves}</ol>
      </div>
    </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningCombo: [a, b, c],
      };
    }
  }
  return null;
}

