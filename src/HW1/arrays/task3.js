function f3(array)
{
	var res = array[0];
	var index = 0;
	for (var i = 1; i < array.length; i++)
	{
		if (array[i] < res)
		{
			res = array[i];
			index = i;
		}
	}
	return index;
}
console.log(f3([5,3,9,7,2,4]));