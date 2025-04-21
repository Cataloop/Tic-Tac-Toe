let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function makeMove(cell, index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    if (checkWinner()) {
      document.getElementById("status").innerText = "Player " + currentPlayer + " wins!";
      gameOver = true;
    } else if (!board.includes("")) {
      document.getElementById("status").innerText = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],  // rows
    [0,3,6], [1,4,7], [2,5,8],  // columns
    [0,4,8], [2,4,6]            // diagonals
  ];
  
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("status").innerText = "Player X's turn";
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}
