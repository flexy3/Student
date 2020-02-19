// let a = 5;
// let b = 23;
// let c = 6;

function max(a, b, c){
  let mul = a * b * c;
  let sum = a + b + c;

if (mul > sum)
  return(mul + 3);
else
  return(sum + 3);
}
console.log(max(a, b, c))