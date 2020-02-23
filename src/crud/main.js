"use strict"
let id = document.getElementById("id");
let name = document.getElementById("name");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let event = document.getElementsByClassName(".buttons");
//let inform = document.getElementsByClassName(".inputs");

function uniq(id) {
    if (id === id)
        return ("Thid ID has already exist");
}

let b = 1;
function nameLetter(name, lname) {
    if (name == b || lname == b)
        return ("Use your reall name");
}

function trueAge(age) {
    if (age < 10) {
        return ("Are you so young?");
    }
    else if (age > 80) {
        return ("Is it real?");
    }



}