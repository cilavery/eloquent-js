const loopingTriangle = require('./loopingTriangle.js');

//test's test
function sum (a,b) {
  return a + b;
}

test ('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});


//looping triangle
test('prints a triangle of hashes', () => {
  expect(loopingTriangle(7)).toHaveLength(7);
});
