"use string"
const element = document.getElementById("display")
const tap = document.querySelectorAll(".button");
console.log(tap);

   function sum(a, b){
       return a + b;
   }
   function substraction(a, b){
       return a - b;
   }
   function mult(a, b){
       return a * b;
   }
   function divide(a, b){
       return a / b;
   }
   function equal(event){
       let num;

     console.log(event);
    switch(event.target.value){
        case "+" :  num += element.value;
            element.value = "";
            break;
        case "-" : num += element.value;
            element.value = "";
            break;
        case "*" : num += element.value;
            element.value = "";
            break;
        case "/" : num += element.value;
            element.value = "";
            break;
        case "=" : num += element.value;
            element.value = "";
            break;
        default:
            element.value += event.target.value;

    }
   }
    tap.forEach((element) => {
        element.addEventListener("click",(e) => equal(e))
    });
    tap.forEach((elem) => {
        elem.addEventListener("click", (e) => console.log(e))
    })