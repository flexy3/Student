function f6(array)
{
	var res = [];
	var k = 0;
	for (var i = array.length - 1; i >= 0; i--)
	{
		res[k] = array[i];
		k++;
	}
	return res;
}

//console.log(f6([5,3,9,7,2,4]));