// const twentyDollar = 273638;
// const tenDollar = 'sdhjbsd'

// const den1 = [ twentyDollar, tenDollar ]
              
              
const den = [ {name : "twentyDollar", value : 2000},
              {name : "tenDollar", value : 1000},
              {name : "fiveDollar", value : 500},
              {name : "twoDollar", value : 200},
              {name: "oneDollar", value : 100},
              {name: "quarter", value : 25},
              {name : "dime", value : 10},
              {name : "nickel", value : 5},
              {name : "penny", value : 1}
            ]

            function calculateChange(cost, payment) {
                let change = payment - cost
                let output = {};
                
                for (let i = 0; i < den.length; i++) {
                  const currentDen = den[i];
                  if (currentDen.value <= change) {
                    let n = Math.floor(change / currentDen.value);
                    change = change % currentDen.value;
                    const currentDenName = currentDen.name;
                    output[currentDenName] = n     
                  }
                  if (change === 0) break;
                }
                return output;
            }


// function calculateChange(total, amount)
 // change = amount - total
 // convert change to list of denominations & numberOf
  // forEach denomination
    // if change < denomintaion, skip
    // if change == denomination, retun 1of denomination
    // if change > denomination,
        // numberOf = change/denomination
        // change = change % denomination

            
        

// return an object {denomination + ": " + numberOf + ", "}
    // eg {twoDollar: 1, dollar: 1, quarter: 3, penny: 2}