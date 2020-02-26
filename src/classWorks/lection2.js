//Variables
let variable = 20;
let anotherVariable = "some string";
console.log(variable, anotherVariable)

//Data types
let myNumber = 12345;
let myString = "some string";
let myBool = true;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;
console.log (myNumber, myString, myBool, myNull, mySymbol, myUndef)

//Data types. Number ex1
let a = 10;
let b = 0xfffcc;
let c = 0345;
let d = 012348;
let e = 12.45;
let f = .89;
let g = 1.24e4;
let h = 1/0;
let i = -1/0;
console.log(a, b, c, d, e, f, g, h, i)

//Data types. Number ex2
let number = 4000;
let newNumber = new Number(4000);
console.log(typeof number, typeof newNumber, newNumber.toFixed(2), number.toFixed(2));

//Arithmetic operators ex1
let count = 10;
console.log(++count, count, count++);

//Arithmetic operators ex2
let variable1 = 100;
variable1 = variable1 + 20;
let anotherVariable1 = 25;
anotherVariable1 = anotherVariable1 * 4;
console.log(variable1, anotherVariable1)

//Arithmetic operators ex3
console.log(5 < 10, 5 > 10, 10 >= 10, 8 <= 10, 10 === 10, 10 !== 10, 10 == "10", 10 === "10");

//Data types.String ex1
console.log("string", 'newString', 'anotherString', "this is my \"string\"")

//Data types.String ex2
let str = "new string";
console.log(str[2]);

//Data types.Boolean ex1
console.log (5===6, 5===5)

//Data types.Boolean ex2
let num = 5;
console.log(num && 10 + num);
let prevString = "my String";
let newStr = prevString || "default";

//Data types. Null & Undefined ex1
let temp;
let obj = {};
let ar = [1,2,3];
const func = () => {return};
console.log(temp, obj.property, ar[3], func())

//Data types. Null & Undefined ex2
console.log(typeof null); 
console.log(typeof undefined);
console.log(null == undefined); 
console.log(null === undefined);

//Data types. Symbol ex1
let symbol = Symbol();
console.log(symbol );
console.log(typeof symbol);

//Data types. Symbol ex1 ex2
let symbol1 = Symbol("name");
console.log (symbol1);
let anotherSymbol = Symbol("name"); 
console.log(anotherSymbol);
console.log(symbol === anotherSymbol)

//Data types. Symbol. For 
let symb = Symbol.for("name");
let anothersymb = Symbol.for("name");
console.log(symb, anothersymb, symb === anothersymb)

//Data types. Symbol. keyFor
let symbol2 = Symbol.for("name");
let name = Symbol.keyFor(symbol2);
console.log(name)

//Data types. Symbol. keyFor 2
//let user = { userName: "Vasya", [Symbol('password')]: "asdf" }
//console.log(user .password);
//console.log(Object.keys(user));
//console.log(Object.getOwnPropertyName(user));
//let password = user [Symbol.for('password')];
//console.log( password );

//
let password = Symbol(); 
let user = { userName: "Vasya", [ password ]: "“asdf”" }
console.log(user)

//
console.log(typeof Number, typeof typeof null)