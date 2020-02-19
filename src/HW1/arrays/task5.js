function f5(array)
{
	var sum = 0;
	for (var i = 0; i < array.length; i++)
	{
		if (i % 2 != 0)
		{
			sum += array[i];
		}
	}
	return sum;
}

console.log(f5([5,3,9,7,2,4]));