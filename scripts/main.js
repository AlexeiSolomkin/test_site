/*
"use strict";
const COLOR_RED = "#F00";
let mesage = 1;
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  }; 
console.log(message);
*/

// смена фото
let my_image = document.querySelector("img");
my_image.onclick = function () {
  let my_src = my_image.getAttribute("src");
  if (my_src === "images/shreck.png") {
    my_image.setAttribute("src", "images/shreck2.png");
  } else {
    my_image.setAttribute("src", "images/shreck.png");
  }
};

// приветственное сообщение с именем
let my_button = document.querySelector("button");
let my_heading = document.querySelector("h1");

function SetUsername() {
  let my_name = prompt("Введите свое имя:", "");
  localStorage.setItem("name", my_name);
  my_heading.textContent = "Hello, " + my_name;
}

if (!localStorage.getItem("name")) {
  SetUsername();
} else {
  let storedname = localStorage.getItem("name");
  my_heading.textContent = "Hello, " + storedname;
}

my_button.onclick = function () {
  SetUsername();
};
