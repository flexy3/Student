"use strict"
const equal = document.getElementById("equal");
const display = document.getElementById("display");
const button = document.querySelectorAll(".button");

let number1;
let number2;
let operator;
let dotClick = true;
function sum(a, b) {
    return +a + +b;
}
function substraction(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function arithmetic() {
    number2 = display.value;
    switch (operator) {
        case "+":
            display.value = sum(number1, number2);
            break;
        case "-":
            display.value = substraction(number1, number2);
            break;
        case "*":
            display.value = mult(number1, number2);
            break;
        case "/":
            display.value = divide(number1, number2);
            break;
    }
    number1 = undefined;
    number2 = undefined;
}
for (let i = 0; i < button.length - 1; i++) {
    button[i].addEventListener("click", clickButton)
}

function clickButton(event) {
    switch (event.target.value) {
        case "+":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            operator = "+"
            display.value = "";
  
             dotClick = true;

            break;
        case "-":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = "";
            operator = "-";

            dotClick = true;

            break;
        case "×":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = "";
            operator = "*";

            dotClick = true;

            break;
        case "÷":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = "";
            operator = "/";
             dotClick = true;

            break;
        case "=":
            break;
        case ".":
            if(dotClick){
            if((display.value^0) == display.value){
                display.value += "."
        }}
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
equal.addEventListener("click", arithmetic);