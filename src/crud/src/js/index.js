"use strict"
let id = document.getElementById("id").value;
let name = document.getElementById("name").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;

let createButton = document.getElementById("create").addEventListener("click", create);
let readButton = document.getElementById("read").addEventListener("click", read);
let updateButton = document.getElementById("update").addEventListener("click", update);
let deletButton = document.getElementById("delet").addEventListener("click", delet);
let persons = [];


function create() {    
 let row = document.createElement('div');
 row.className = "row";
 div.innerHTML = " ";
}
function read() {
    console.log(read)
}
function update() {
    console.log(update)
}
function delet() {
    console.log(delet)
}