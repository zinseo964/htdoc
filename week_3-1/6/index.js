var fruits = ["apple", "orange", "cherry"];

function myFunction(item, index) {
  document.write(index + ":" + item + "<br>");
}

let myFunction = (item,index) => {
  console.log(index);
  document.write(index + ":" + item + "<br>");
}

for (i = 0; i < 3; i++) {
  document.write(i);
  document.write(":" + fruits[i] + "<br>");
}

fruits.forEach(myFunction);