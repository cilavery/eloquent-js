const minimum = require('./minimum').minimum;
const isEven = require('./recursion');
const charCount = require('./charCount');

//Minimum
test('returns minimum number', () => {
  expect(minimum(10,25)).toEqual(10);
});

test('returns minimum number', () => {
  expect(minimum(-1,30)).toEqual(-1);
});

test('returns "equal" if numbers are same', () => {
  expect(minimum(5, 5)).toEqual("equal");
});

//Recursion
test('returns a Boolean for whether number is even or odd', () => {
  expect(isEven(75)).toEqual(false);
});

test('returns a Boolean for whether number is even or odd', () => {
  expect(isEven(50)).toEqual(true);
});


//Bean Counting
test('counts number of times a character shows up in a given string', () => {
  expect(charCount("CeCiLiA is so cool", "C")).toEqual(2);
});
