const page = document.getElementById("question-p");
const progress = document.getElementsByClassName("meter");
const score = document.getElementById("score");

const qnaList = [
    {
        q: 'What is 1 + 1',
        a : [
            { answer: 'A. 2', score:1},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0}
        ]
    },
    {
        q: 'What is 1 + 2',
        a : [
            { answer: 'A. 2', score:1},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0}
        ]
    },{
        q: 'What is 1 + 1',
        a : [
            { answer: 'A. 2', score:1},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0}
        ]
    },{
        q: 'What is 1 + 2',
        a : [
            { answer: 'A. 2', score:1},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0},
            { answer: 'B. 4', score:0}
        ]
    }
];
let qIdx = -1;
const makeqna = () =>{
    if(qIdx++ === qnaList.length -1){
        end();
        return ;
    }

    document.getElementById("question").innerHTML = qnaList[qIdx];
    document.getElementById("choices").innerHTML = qnaList[qIdx].a;
}
const calcScore = () => {
    let point = 0;

}