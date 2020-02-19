function f2(array) 
{
	var res = array[0];
	for (var i = 1; i < array.length; i++)
 	{
		if (array[i] > res) 
		{
			res = array[i];
		}
	}
	return res;
}
console.log(f2([5,3,9,7,2,4]));