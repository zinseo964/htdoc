var first = document.querySelector('#first');
var second = document.querySelector('#second');
var third = document.querySelector('#third');
var fourth = document.querySelector('#fourth');
var fifth = document.querySelector('#fifth');
var info = document.querySelector('#info');
var other_btn = document.querySelectorAll('.item');
var mode = 1;
const CLICKED_CLASS = "clicked";


first.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    if (mode === 1){
        info.innerHTML = "Developer";
        mode = 0;
    }else{
        info.innerHTML = "";
        mode = 1;
    }
});

second.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    if (mode === 1){
        info.innerHTML = "React / Node ";
        mode = 0;
    }else{
        info.innerHTML = "";
        mode = 1;
    }
});

third.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    if (mode === 1){
        info.innerHTML = "How much I can Improve";
        mode = 0;
    }else{
        info.innerHTML = "";
        mode = 1;
    }
});

fourth.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    if (mode === 1){
        info.innerHTML = "younguhro han eunun hangeul fontga an ggaejigo sipasuh ipmida. jeoldaero younguhga duh peanhangan anipmida.";
        mode = 0;
    }else{
        info.innerHTML = "";
        mode = 1;
    }
});

fifth.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    if (mode === 1){
        info.innerHTML = "Student in SMWU(18.03 ~ 22.08) <br> Major : Computer Science <br> Favorite Movie : LaLa Land <br> instagram : @dlwlstjin";
        mode = 0;
    }else{
        info.innerHTML = "";
        mode = 1;
    }
});

