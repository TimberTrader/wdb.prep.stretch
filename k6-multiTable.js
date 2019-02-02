function multiT(number) {
  let res = [];
  const maxWidth = String(number * number).length;
  for(let n = 1; n <= number; n++)
    if (n < number) {
      res.push(genRow(number, n, maxWidth));
    } else {
      res.push(genRow(number, n, maxWidth))
      res.push(genRow(number, n, maxWidth, true))
    }
  return res.join("");
}


function genRow(num, rowNum, maxWidth, noDline) {
let tLine = "", dLine = "", bLine = "";

for (let i = 1; i <= num; i++) {
    const data = i * rowNum;
    let curWidth = maxWidth - String(data).length;
  tLine += "+-" + repeatChar(maxWidth, '-');
  if (!noDline) dLine += "| " + data + repeatChar(curWidth, " ");
}

bLine = tLine + "+\n";
if (dLine) bLine += dLine + "|\n"
return bLine;
}

function repeatChar(n, char) {
let out = char;
for(let i = 0; i < n; i++) {
  out += char;
}
return out;
}
console.log(multiT(10))