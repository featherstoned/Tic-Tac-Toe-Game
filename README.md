# Tic-Tac-Toe-Game
created with React

### General Theme:
I set out to create a tic-tac-toe game with the appearance of something you would play at school with friends with common school supplies (lined notebook paper, pencil, highlighter).

The provided code is a React component for a Tic-Tac-Toe game with the following functionality:

### Square Component (child of Board):
   - This component represents a single square/button in the game board.
   - It receives props such as `value` (the value in the square), `isWinningCombo` (whether it is part of the winning combination), and `onSquareClick` (a function to handle the click event).

### Board Component (child of Game):
   - This component represents the game board.
   - It receives props such as `xIsNext` (boolean indicating whether it's "X" player's turn), `squares` (an array representing the current state of the board), `onPlay` (a function to handle a player's move), `winningCombo` (an array representing the winning combination, if any), and `status` (the current game status).
   - Inside the `Board` component, there's a `handleClick` function to handle the square/button click event.
   - The JSX structure represents the Tic-Tac-Toe board layout, with each square being rendered as a `Square` component.

### Game Component (parent/main component):
   - This is the main component that represents the overall Tic-Tac-Toe game.
   - It utilizes React's `useState` hook to manage state variables.
   - It initializes state variables such as `winningCombo` (array to store the winning combination), `gameResult` (string representing the game result/status), `history` (array to store the history of moves), `currentMove` (index to track the current move), and `xIsNext` (boolean indicating whether it's "X" player's turn).
   - It contains helper functions like `handlePlay` (to handle a player's move), `jumpTo` (to jump to a specific move), and `calculateWinner` (to determine the winner based on the current board state).
   - The JSX structure renders the game components, including the game board (`Board` component), the game status, and the move history.

### calculateWinner Function:
   - This function accepts an array representing the current state of the Tic-Tac-Toe board (`squares`).
   - It checks for winning combinations by iterating over predefined winning lines.
   - If a winning combination is found, it returns an object with the winning player and the winning combination. Otherwise, it returns null.

### Styling
Imported background image of lined notebook paper from Pixabay, 'Waiting For the Sunrise' font embedded from Google Fonts, Hex Colors to resemble graphite from pencil and flourescent yellow from highlighter.
