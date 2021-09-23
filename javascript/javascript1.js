'use strict';

let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function register() {
    x.style.left = "-500px";
    y.style.left = "70px";
    z.style.left = "140px"
}
function login() {
    x.style.left = "70px";
    y.style.left = "500px";
    z.style.left = "0px";
}