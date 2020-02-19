function f8(arr) {
var leng = arr.length;
var temp;
for (var i = leng - 1; i >= 0; i--) {
for (var j = 1; j <= i; j++) {
if (arr[j - 1] > arr[j]) {
temp = arr[j - 1];
arr[j - 1] = arr[j];
arr[j] = temp;}
 }
}
console.log (arr);
}
f8([3,1,4,2]);