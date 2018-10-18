module.exports.chessBoard = function (num) {
  let count = 0;
  let first = " ";
  let second = "#";
  let str = "";
  while (count < num) {
    if (count % 2 === 1) {
      first = "#";
      second = " ";
    } else {
      first = " ";
      second = "#";
    }

    for (let i = 0; i < Math.floor(num / 2); i++) {
      str += first;
      str += second;
    }
    str += '\n';
    count++;
  }
  console.log(str);
}

//module.exports = chessBoard;
