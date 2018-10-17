function loopingTriangle (num) {
  let hash = '';
  for (let i = 0; i < num; i++) {
    console.log(hash);
    hash += '#';
  };
  return hash;
}

module.exports = loopingTriangle;


