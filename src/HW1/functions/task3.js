var a = 'Сто Три';
var ary = [];
ary[0] = ["Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять", "Одиннадцать", "Двенадцать", "Тринадцать", "Четырнадцать", "Пятнадцать", "Шестнадцать", "Семнадцать", "Восемнадцать", "Девятнадцать"];
ary[1] = ["", "", "Двадцать", "Тридцать", "Сорок", "Пятьдесят", "Шестьдесят", "Семьдесят", "Восемьдесят", "Девяносто"];
ary[2] = ["", "Сто", "Двести", "Триста", "Четыреста", "Пятьсот", "Шестьсот", "Семьсот", "Восемьсот", "Девятьсот"];

function function_name(strAry) {
	var res = 0;
	var mul = 1;
	var strAry = str.split(' ');
	for (var i = ary.length; i--;)
		if (ary[i].indexOf(strAry[0]) != -1)
			break;

	for (var j = 0; i > -1; i--) {
		var n = ary[i].indexOf(strAry[j]);
		if (n != -1)
			j++;
		else {
			n = 0;
		}
		res = res * 10 + n;
	}
	return res;
}
console.log(function_name(strAry))
// for (var str; str = prompt('Введите число прописью:');) {
// 	var res = function_name(str);
// 	alert(res);
