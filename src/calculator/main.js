"use strict"
const equal = document.getElementById("equal"); //вытягивает знак =
const dot = document.getElementById("dot"); //вытягивает .
const display = document.getElementById("display"); //вытягивает инпут
const button = document.querySelectorAll(".button"); //вытягивает все кнопки (цифры+операторы) в массив 

let number1; //переменная для первой цифры
let number2; //переменная для второй цифры
let operator; //переменная для знака 

function sum(a, b) { // функция суммы пример: 2 + 2 
    return +a + +b; // возврат значения пример: 4 и перевод строки в число
}
function substraction(a, b) { //функция вычитания
    return a - b; //возврат результата
}
function mult(a, b) { //функция умножения
    return a * b; //возврат результата
}
function divide(a, b) { //функция деления
    return a / b; //возврат результата
}

function arithmetic() { //функция для арифметических знаков
    number2 = display.value; //вторая цифра которую мы получаем с дисплея и записываем в переменную
    switch (operator) { //перебор каждого оператора
        case "+": //если прилетел +
            display.value = sum(number1, number2);//выводим на дисплей результат суммы 
            break; //конец итерации 
        case "-": //если прилетел -
            display.value = substraction(number1, number2); //выводим на дисплей результат вычитания
            break;//конец итерации 
        case "*": //если прилетел *
            display.value = mult(number1, number2); //выводим на дисплей результат уможения
            break;//конец итерации 
        case "/": //если прилетел /
            display.value = divide(number1, number2); //выводим на дисплей результат деления
            break;//конец итерации 
    }
    number1 = undefined; // айндефайнд потому что еще не присвоено значение,
    number2 = undefined; // а пользователь когда вводит цифру, она заменяет андефайнд
    dot.addEventListener("click", () => { display.value += "." }, { once: true });  // что бы только один раз нажималась точка
}
///////////////////////////////////////////////////////////////////////////////////////////////////////индексы  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 
for (let i = 0; i < button.length - 1; i++) { //цикл который перебирает массив кнопок. НО если он выглдит так[ AC, /, 7, 8, 9, *, 4, 5, 6, -, 1, 2, 3, +, 0, ., = ]
    button[i].addEventListener("click", clickButton)////////////////////////////////////////////////количество  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
    //то есть length считает количество с еденицы, а так как мы передаем массив, который считается по индексу, мы уменьшили длину на -1 ?
}

function clickButton(event) {  //функция, которая получает событие нажатия кнопки в обьект ивент
    switch (event.target.value) { //target возвращает ссылку на обьект, который был нажат, value - значение
        case "+": 
            (number1 == undefined) ? number1 = display.value : arithmetic();
            operator = "+"
            display.value = ""; //очистка поля дисплея
            break;
        case "-":
            (number1 == undefined) ? number1 = display.value : arithmetic(); //если первое число неопределено, то вернуть его значение в дисплей?
            display.value = "";
            operator = "-"
            break;
        case "×":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = "";
            operator = "*"
            break;
        case "÷":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = "";
            operator = "/"
            break;
        case "=":
            break;
        case ".":
            break;
        case "AC":
            number1 = undefined;
            number2 = undefined;
            display.value = "";
            break;
        default:
            display.value += event.target.value;
    }
}
equal.addEventListener("click", arithmetic); //навешивает действие которое происходит на стр и вызывает функцию
dot.addEventListener("click", () => { display.value += "." }, { once: true }); //выводит точку в инпут только один раз