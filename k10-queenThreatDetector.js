let wQ = [0,7]
let bQ = [7,0]

let threat =""

if ((wQ[0] == bQ[0]) || (wQ[1] == bQ[1])) {
  threat += "true"
} else if (Math.abs((wQ[1] - bQ[1])) == Math.abs(wQ[0] - bQ[0])) {
  threat += "true"
} else {
  threat += "false"
}

console.log(threat)


// var chessB = []
// var chessR = []
// //var i

// for (let i = 0; i < 8; i++) {
//   chessR.push('0')
// }

// for (let i = 0; i < 8; i++) {
//   console.log(chessR)
// }
