//let input = "feedthedog"

// let sqrC = sqrL
// let codeN = "hae"

function code(input) {
  let sqrL = Math.ceil(Math.sqrt(input.length))
  let codeOut = "";
    for (let i = 0; i < sqrL; i++) {
      // let n = i
      codeOut += codeS(input, i, sqrL) + " "
    }
  return codeOut
}

function codeS(inputStr, col, midPoint) {
  let strS = ""
    for (var i = col; i < inputStr.length; i+= midPoint) {
        strS += inputStr.charAt(i);
      }
  return strS
  }
  

//console.log(code(input))
