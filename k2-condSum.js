var conditionalSum = function(values, condition) {
  if (condition === "even")
    return values.reduce(function(sum, value) {
        return (value % 2) ? sum : sum + value;
      }, 0)
  
  if (condition === "odd")
    return values.reduce(function(sum, value) {
      return !(value % 2) ? sum : sum + value;
    }, 0)
}