// let a = 5;
function factorial(a) {
  if(a != NaN && a != undefined) {
      let i = 1, result = 1;
      while (i != a + 1) {
          result *= i;
          i++;
      }
      return result;
    }
}
console.log(factorial(a))