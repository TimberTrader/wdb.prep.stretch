// let input = "this is a string"
// return = "thisIsAString"
function camelCase(input) {
    let output = input.replace(/\s[a-zA-Z]/g, processMatch)
    return output;
    console.log(output)
}

function processMatch(matched) {
    return matched.trim().toUpperCase()
}
//console.log(camelCase('loopy lighthouse'))