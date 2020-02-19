function f7(array)
{
	var count = 0;
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] % 2 != 0)
		{
			count++;
		}
	}
	return count;
}

console.log(f7([5,3,9,7,2,4]));