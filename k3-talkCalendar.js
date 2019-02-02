let talkingCalendar = function(date) {

// "2017/12/02" returns "December 2nd, 2017"
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let ymd = date.split('/')
let Y = ymd[0]
let M = months[ymd[1] - 1]
let D = Number(ymd[2])

function makeOrd(d) {
  switch (D) {
    case 1:
    case 21:
      return D + "st,";
      break;
    case 2:
    case 22:
      return D + "nd,";
      break;
    case 3:
      return D + "rd,";
      break;
    default:
      return D + "th,";
    }
}

return M + " " + makeOrd(D) + " " + Y

}