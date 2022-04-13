function myfunction(){
    let state = document.querySelector("#myDIV");
    let para = document.createElement("P");
    para.innerHTML = "이것이 추가될 문장입니다.";
    state.appendChild(para);
}