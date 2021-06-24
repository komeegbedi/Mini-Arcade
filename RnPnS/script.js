const games = ['rock' , 'paper' , 'scissor'];

let buttons = document.querySelector('.buttons');
let result = document.querySelector('.result');
let details = document.querySelector('.details');
let card = document.querySelector('.card');
let img = document.querySelector('.card img');
let cpuScore = document.querySelector('.cpu-score');
let userScore = document.querySelector('.player-score');

let cScore = 0;
let pScore = 0;

let cpuPlay;



buttons.addEventListener('click' , e =>{

    cpuPlay = games[randomNumber()];
    
    let userPlay;

    if(e.target.classList.contains('rock')){
        userPlay = games[0];
    }
    else if (e.target.classList.contains('paper')){
        userPlay = games[1];
    }
    else{
        userPlay = games[2];
    }

    if(userPlay === cpuPlay){
        result.innerHTML = 'It is a draw';
        img.src = 'confused.svg';
    }
    else if( (userPlay === games[0] && cpuPlay === games[2])|| 
             (userPlay === games[1] && cpuPlay === games[0])||
             (userPlay === games[2] && cpuPlay === games[1]) )
    {
        result.innerHTML = 'You Won';
        img.src ='happy-snowman.svg';
        pScore++;
    }
    else{
        result.innerHTML = 'Computer Won';
        img.src = 'sad-face.svg';
        cScore++;
    }

    details.innerHTML = `You choose ${userPlay} and the computer choose ${cpuPlay}`;

    cpuScore.innerHTML = cScore;
    userScore.innerHTML = pScore;
   

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

});

function randomNumber(){
    return Math.floor(Math.random() * (games.length));
}