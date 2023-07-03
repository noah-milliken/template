const Ship = require('./src/shipFactory');

test('should create a ship object with correct properties', () => {
  const ship = Ship('battleship', 5);
  expect(ship.name).toBe('battleship');
  expect(ship.length).toBe(5);
  expect(ship.getHits()).toBe(5);
});

test('should update hits and isSunk', () => {
  const ship = Ship('sub', 3);
  ship.hit();
  expect(ship.getHits()).toBe(2);
  ship.hit();
  ship.hit();
  expect(ship.getHits()).toBe(0);
  expect(ship.getIsSunk()).toBe(true);
});
