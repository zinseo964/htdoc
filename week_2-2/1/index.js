let blockOne = document.getElementById("red");
let blockTwo = document.getElementById("yellow");
let blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
blockOne.addEventListener("mouseenter", () => {
    blockOne.classList.add("red");
}) // -> 마우스를 올렸을때 class 를 추가해주는 함수
// blockOne.addEventListener("mouseenter", function(){
//     blockOne.style.backgroundColor = "red";
// }) -> 마우스를 올렸을때 아예 스타일을 넣어주는거

blockTwo.addEventListener("mouseenter", function(){
    blockTwo.style.backgroundColor = "gold";
})

blockThree.addEventListener("mouseenter", function(){
    blockThree.style.backgroundColor = "lightgreen";
})