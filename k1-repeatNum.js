function repeatNumbers(data) {
    data.forEach(repeatNumber)
}

function repeatNumber(element) {
    let str = element[0].toString().repeat(element[1].toString());
    console.log(str);
} 

// repeatNumbers([[10, 4], [34, 6], [92, 2]]);