const qsort = (arr) => {
	if (arr.length < 2) {
return arr;
	} else {
	const pivotPosition = Math.floor(Math.random() * arr.length);
	 const pivot = arr[pivotPosition];
	  const less = arr.filter((value, index) => {
	   const isPivot = index === pivotPosition;
	  return !isPivot && (value <= pivot);
	  });
	 const greater = arr.filter(value => value > pivot);
	return [...qsort(less), pivot, ...qsort(greater)];
 }
};

const arr = [4, 2, 12, 8, 0, 24, 6];
console.log(qsort(arr));


const mergeSort = arr => {
    if (!arr || !arr.length) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
const arr = [4, 2, 12, 8, 0, 24, 6];
console.log (mergeSort(arr));


var shellsort = function(array){
  var length = array.length;
  var h = 1;
  while( h < length / 3){
    h = 3 * h + 1;
  }
  while( h > 0 ){
    for ( var i = h; i < length; i++){
      for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
        array.swap(j, j-h);
      }
   }
   h = - h / 3
  }
  return array;
};
const arr = [4, 2, 12, 8, 0, 24, 6];
console.log (shellsort(arr));


function heap_root(input, i){
var array_length;  
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [4, 2, 12, 8, 0, 24, 6];
heapSort(arr);
console.log(arr);