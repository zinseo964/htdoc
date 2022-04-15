var first = document.querySelector('#first');
var second = document.querySelector('#second');
var third = document.querySelector('#third');
var fourth = document.querySelector('#fourth');
var fifth = document.querySelector('#fifth');
var info = document.querySelector('#info');
var main = document.querySelector('.container');

const CLICKED_CLASS = "clicked";

first.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS,innerHTML="Developer");

    //info.innerHTML = "Developer";
});

second.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    info.innerHTML = "React / Node ";
});

third.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    info.innerHTML = "How much I can Improve";
});

fourth.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    info.innerHTML = "younguhro han eunun hangeul fontga an ggaejigo sipasuh ipmida. jeoldaero younguhga duh peanhangan anipmida.";
});

fifth.addEventListener('click',function(){
    this.classList.toggle(CLICKED_CLASS);
    info.innerHTML = "Student in SMWU(18.03 ~ 22.08) <br> Major : Computer Science <br> Favorite Movie : LaLa Land <br> instagram : @dlwlstjin";

});

