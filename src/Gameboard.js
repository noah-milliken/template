/* eslint-disable no-plusplus */
import Ship from "./shipFactory";

const Gameboard = () => {
  const board = [];
  let totalHits = 0;

  const createGameboard = () => {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(null); // Initialize each cell as null
      }
      board.push(row);
    }
  };

  const placePiece = (x, y, ship, axis = true) => {
    const { length } = ship;
    if (axis) {
      if (length + x > 9) {
        return;
      }
      for (let i = y; i < length + y; i++) {
        board[x][i] = piece;
      }
      board[x][y + length - 1] = piece;
    } else {
      if (length + y > 9) {
        return;
      }
      for (let i = x; i < x + length; i++) {
        board[i][y] = piece;
      }
      board[x + length - 1][y] = piece;
    }
  };
  const recieveAttack = (x, y) => {
    if (board[x][y]) {
      board[x][y] = "᪥";
      totalHits++;
    } else {
      board[x][y] = "০";
    }
  };
  return {
    createGameboard,
    placePiece,
    recieveAttack,
    board,
  };
};
module.exports = Gameboard;
// ⁂
const battleship = Ship("Battleship", 4);
console.log(battleship);

const gameboard = Gameboard();
gameboard.createGameboard();
gameboard.placePiece(4, 4, battleship, false);
console.log(gameboard);
