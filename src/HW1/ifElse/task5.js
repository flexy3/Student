// let a = 89;
function rating(a){

 if ( a < 20 ){
	 return("F")
 }
else if ( a < 40 ){
	return("E");
}
else if ( a < 60 ){
	return("D");
}
else if ( a <= 74 ){
	return("C");
}
else if ( a < 75 ){
	return("B");
}
else if ( a < 90 ){
	return("B");
}	
else if ( a < 101 ){
	return("A");
}	
}
console.log(rating(a));