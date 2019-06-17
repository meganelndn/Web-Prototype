var coll = document.getElementById("btn");
var i;

let btn = document.querySelector("#btn")
let login = document.querySelector(".login")

login.classList.add("hide")

btn.addEventListener("click", function () {
  login.classList.add("show")
  btn.classList.add("hide")
});
