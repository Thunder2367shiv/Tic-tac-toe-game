let turn = new Audio("direction_change.mp3");
let over = new Audio("game_over.mp3");
let chance = "X";
let gameover = false;

// function to change chance
const changechance = () =>{
    return chance === "X" ? "O" : "X"
}

// Function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won";
            over.play();
            gameover = true;
        }
    })
}


// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = chance;
            chance = changechance();
            turn.play();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
            }
        }
    })
});

// reset
reset.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    chance = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + chance;
})