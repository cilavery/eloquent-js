const loopingTriangle = require('./loopingTriangle.js');
const fizzBuzz = require('./fizzBuzz.js');
const chessBoard = require('./chessBoard');

/* How to test console.logs? */

//test's test
function sum (a,b) {
  return a + b;
}

xtest ('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});


//looping triangle
xtest('prints a triangle of hashes', () => {
  expect(loopingTriangle(7)).toHaveLength(7);
});

//fizzBuzz

xtest('prints "fizz" with 3', () => {
  expect(fizzBuzz.fizzBuzz(3)).toMatch('Fizz');
});

//chessboard
xtest('prints a chess board', () => {
  global.console.log = jest.fn();
});
