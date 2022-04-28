
async function getPassword(e){
    e.preventDefault();
    const res = await fetch('https://randomuser.me/api/?password=upper,lower,number');
    const data = await res.json();
    const list = data.results[0];
    
    passwordElem.innerHTML = list.login.password;
    
}


const buttonElem = document.querySelector('#buttonSubmit')
const passwordElem = document.querySelector('#password')

buttonElem.addEventListener("click", getPassword)