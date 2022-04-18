function night(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    let arr = document.querySelectorAll('a');
    for(let i = 0;i<arr.length;i++){
        arr[i].style.color = 'gray';
    }
    // $('body').css('background-color','black').css('color','white');
    // $('a').css('color','gray'); 
}
function day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let arr = document.querySelectorAll('a');
    for(let i = 0;i<arr.length;i++){
        arr[i].style.color = 'blue';
    }
}

export function dayNight(mode){
    if(mode === 'night'){
        night();
    } else{
        day();
    }
}