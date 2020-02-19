var a = prompt("Введите число","");
var b = 0;
if(a == 0) 
{
    alert("Сумма чисел равна 0");
}
for(var i = a; i > 0; i/10)
 {
        b += a%b;
 }
alert(b);