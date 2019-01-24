//global
const boardContainer = document.getElementById("container");
const cells = boardContainer.querySelectorAll(".square");
const resetButton = document.getElementById("reset");
const winPattern =[
    // rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // cols
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diag
    [0,4,8],
    [2,4,6]
];
console.log(winPattern[3][1]);
//0 means playerOne and 1 means playerTwo
let activePlayer = 0;

//3 means not played
let gameState = [2,2,2,2,2,2,2,2,2];

//will change to false if player has won
let gameIsActive = true;

const resetAll = () => {
    gameState = [2,2,2,2,2,2,2,2,2];
    activePlayer = 0;
    gameIsActive = true;
    for(const prop of cells) {
        prop.style.pointerEvents = "auto";
        prop.style.color = "rgba(255, 255, 255, 0)";
        prop.classList.remove("playerOne")
        prop.classList.remove("playerTwo");
        console.log(prop);
}
}

const displayWinner = (n)=> {
    setTimeout(()=> {
        if(n === 0) {
            alert("X has won!");
        } else if(n === 1) {
            alert("O has won!");
        } else{
            alert("Cats game!");     
        }
        resetAll();
    }, 400);
}

const playerSet = (p)=> {
    if(gameState[p] === 2 && gameIsActive){
        if(activePlayer === 0){
            gameState[p] = 0;
            activePlayer = 1;
        } else {
            gameState[p] = 1;
            activePlayer = 0;
        }
        checkWinner();
    }
}
const checkWinner = () => {
    if(gameIsActive){
        for(let i = 0; i < winPattern.length; i++){
            if(gameState[winPattern[i][0]] === 0 
                && gameState[winPattern[i][1]] === 0
                && gameState[winPattern[i][2]] === 0 
                && gameState[winPattern[i][0]] !== 2){
                    console.log(i, " i am here in player 1");
                    gameIsActive = false;
                    displayWinner(0);
                    return;
                } else if(gameState[winPattern[i][0]] === 1 
                    && gameState[winPattern[i][1]] === 1
                    && gameState[winPattern[i][2]] === 1 
                    && gameState[winPattern[i][0]] !== 2){
                        console.log(i, " i am here in player 2");
                        gameIsActive = false;
                        displayWinner(1);
                        return;
                }
            }
    if(gameIsActive){
        let gameIsOver = true;
        for(const prop of gameState) {
            if(prop === 2) {
                gameIsOver = false;
                }                        
            }
            if(gameIsOver) {
                gameIsActive = false;
                displayWinner();
                }
        }
    }
}

const play = (e) => {
    const place = e.target;
    const plays = place.id;
    if(gameIsActive === false){
        return;
    }else {      
        if(activePlayer == 0) {
            playerSet(plays);
            place.innerText = "X";
            place.style.color = "rgba(255, 255, 255, 1)";
            place.style.pointerEvents = "none";
            place.classList.add("playerOne");  
            
        } else {
            playerSet(plays);
            place.innerText = "O";
            place.style.color = "rgba(255, 255, 255, 1)";
            place.style.pointerEvents = "none";
            place.classList.add("playerTwo");
        }
    }
}

for(const prop of cells) {
        prop.addEventListener("click", play);
}
resetButton.addEventListener("click", resetAll);


