function summ() {
	a = 0;
	sum = 0;
	for (var count = 0; count < 100; count++)
	{
		if (count % 2 == 0){
			a++;
			sum += count;
		}	
	}
	return (a, sum)	
}
console.log(summ(a, sum))