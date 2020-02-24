// let a = 123;
function zerkal(a) { 
    let strA = String(a);
    let result = '';
    for (let i = strA.length - 1; i >= 0; i--) {
      result += strA[i]
    } 
    return result;
}
console.log(zerkal(a));