"use strict"
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const display = document.getElementById("display");
const button = document.querySelectorAll(".button");

let number1;
let number2;
let operator;

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
    dot.addEventListener("click", () => { display.value += "." }, { once: true });
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
            break;
        case "-":
            (number1 == undefined) ? number1 = display.value : arithmetic();
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
equal.addEventListener("click", arithmetic);
dot.addEventListener("click", () => { display.value += "." }, { once: true });