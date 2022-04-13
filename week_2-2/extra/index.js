let form = document.getElementById("form");
let myname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let val_name = myname.value;
  let val_email = email.value;
  let val_phone = phone.value;

  let result = '';

result = `<p>name : ${val_name}</p>
        <p>email : ${val_email}</p>
        <p>phone : ${val_phone}</p>`;
document.getElementsByClassName("container").innerHTML= result;
//form.reset();
  
});