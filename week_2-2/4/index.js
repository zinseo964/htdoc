let form = document.getElementById("form");
let input = document.getElementById("input");
let answer = document.getElementById("answer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let val = input.value;
  

  if (val) {
    answer.textContent = val;

    form.reset();
  }
});