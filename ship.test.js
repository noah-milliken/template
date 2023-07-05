const Ship = require("./src/shipFactory");
const Gameboard = require("./src/Gameboard");

test("should create a ship object with correct properties", () => {
  const ship = Ship("battleship", 5);
  expect(ship.name).toBe("battleship");
  expect(ship.length).toBe(5);
  expect(ship.getHits()).toBe(5);
});

test("should update hits and isSunk", () => {
  const ship = Ship("sub", 3);
  ship.hit();
  expect(ship.getHits()).toBe(2);
  ship.hit();
  ship.hit();
  expect(ship.getHits()).toBe(0);
  expect(ship.getIsSunk()).toBe(true);
});
test("Should create an array of arrays that contain 10 null spaces each", () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const expectedBoard = Array(10).fill(Array(10).fill(null));
  expect(gameboard.board).toStrictEqual(expectedBoard);
});
test("should create ships at specified locations", () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  gameboard.placePiece(0, 0, 4, "X");
  gameboard.placePiece(1, 0, 4, "X", false);
  expect(gameboard.board[0][0]).toBe("X");
  expect(gameboard.board[0][3]).toBe("X");
  expect(gameboard.board[3][0]).toBe("X");
});
test("should check if attack returns hit or miss", () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  gameboard.placePiece(0, 0, 4, "X");
  gameboard.placePiece(1, 0, 4, "X", false);
  gameboard.recieveAttack(0, 0);
  gameboard.recieveAttack(5, 5);
  expect(gameboard.board[0][0]).toBe("᪥");
  expect(gameboard.board[5][5]).toBe("০");
});
