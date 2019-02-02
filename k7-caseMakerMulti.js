let input = "this is a string"

function makeStyle(input, style) {
  switch (style) {
    case "camel":
      return camelCase(input);
    case "pascal":
      return pascalCase(input);
    case "snake":
      return snakeCase(input);
    case "kebab":
      return kebabCase(input);
    case "title":
      return titleCase(input);
    case "vowel":
      return vowelCase(input);
    case "constonant":
      return constCase(input);
    default:
      return input;
  }
}

console.log(makeStyle("this is a string", ["snake", "pascal", "vowel"]))

// case specific functions
function camelCase(input) {
  let outputCa = input.replace(/\s[a-zA-Z]/g, matchCa)
  return outputCa;
}
function pascalCase(input) {
  let outputPa = input.replace(/\b[a-z]/g, matchToUpper)
  return outputPa;
}
function snakeCase(input) {
  let outputSn = input.replace(/\s/g, "_");
  return outputSn
}
function kebabCase(input) {
  let outputSn = input.replace(/\s/g, "-");
  return outputSn
}
function titleCase(matched) {
  let outputTi = input.replace(/\b[a-z]/g, matchToUpper)
  return outputTi
}
function vowelCase(input) {
  let outputVo = input.replace(/[aeiou]/g, matchToUpper)
  return outputVo
}
function constCase(input) {
  let outputCo = input.replace(/[^aeiou]/g, matchToUpper)
  return outputCo
}
// more generic functions ... replace with ...

 function matchCa(matched) {
   return matched.trim().toUpperCase();
 }
 function matchToUpper(matched) {
   return matched.toUpperCase();
 }
 function matchTi(matched) {
   return matched.toUpperCase()
 }
 
  
 