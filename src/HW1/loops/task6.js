var a = prompt("Введите число");
var b = 0;
for(; a; a = Math.floor(a / 10))
{
    b *= 10;
    b += a % 10;
}
alert(b);