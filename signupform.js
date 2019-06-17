var coll = document.getElementsByClassName("form");
var i;

let form = document.querySelector(".form")
let content = document.querySelector(".content")

form.addEventListener("click", () => content.classList.toggle("show"));
