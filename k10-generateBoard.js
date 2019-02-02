let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let board = Array(7);

for (var i = 0; i < board.length; i++) {
  board[i] = Array(7);
  for (var j = 0; j < 7; j++) {
    board[i].fill(0, 0)
  }
}
// let wQ = [0, 5];
// let bQ = [5, 0];
// let board = []

// for (var i = 0; i < 7; i++) {
//   board[i] = Array(7);
//   for (var j = 0; j < 7; j++) {
//     if (i == wQ[0]) {
//       board[i].fill(0,0).splice(wQ[1],1,1);
//     } if (i == bQ[0]) {
//       board[i].fill(0,0).splice(bQ[1],1,1)
//     } else {
//       board[i].fill(0,0);
//     }
//   }
// }

console.log(board);