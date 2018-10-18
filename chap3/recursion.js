function isEven (num) {
  //base case
  if (num === 0) {
    return true
  } else if (num === 1) {
    return false
  }

  //recursive call
  return isEven(num-2);
}

module.exports = isEven;
