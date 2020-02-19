// let a = 5;
// let b = 678;
// let c = 0;
	function summ(a, b, c){

	if (a >= 0 && b >= 0 && c >=0){
		return(a + b + c)
	}
	else if (a >= 0 && b >= 0){
		return(a + b)
	}
	else if (a >=0 && c>= 0){
		return(a + c)
	}
	else if(b >= 0 && c >= 0){
		return(b + c)
	}
}
console.log(summ(a, b, c))
	