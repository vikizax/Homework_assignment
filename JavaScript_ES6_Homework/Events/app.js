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
//0 means playerOne and 1 means playerTwo
let activePlayer = 0;
//2 means not played
//place on the tic-tac-toe board
let gameState = [2,2,2,2,2,2,2,2,2];
//will change to false if player has won
let gameIsActive = true;


//Function exp to reset the game
const resetAll = () => {
    //reset the tic-tac-toe board place as 2
    gameState = [2,2,2,2,2,2,2,2,2];
    //set the default start player as 0
    activePlayer = 0;
    //set game is active true
    gameIsActive = true;
    //reset all the cells of the tic-tac-toe board as default
    for(const prop of cells) {
        prop.style.pointerEvents = "auto";
        prop.style.color = "rgba(255, 255, 255, 0)";
        prop.classList.remove("playerOne")
        prop.classList.remove("playerTwo");
    }
}

//Function exp to display the dialog window to show the game end stats
const displayWinner = (n)=> {
    //set delay for animation to complete 
    setTimeout(()=> {
        //check n value 0 for X, 1 for O, or cats game
        if(n === 0) {
            alert("X has won!");
        } else if(n === 1) {
            alert("O has won!");
        } else{
            alert("Cats game!");     
        }
        //once game ends reset the progress
        resetAll();
    }, 400);
}

//Function exp to switch between X and O player, X start as first by default
const playerSet = (p)=> {
    //checks position on the board not played and game is active
    if(gameState[p] === 2 && gameIsActive){
        //0 for X
        if(activePlayer === 0){
            //set the position played on the board as 0, 'X'
            gameState[p] = 0;
            //change the active player to 1, '0'
            activePlayer = 1;
        } else {
            //set the position played on the board as 1, 'O'
            gameState[p] = 1;
            //change the active player to 0, 'X'
            activePlayer = 0;
        }
        //check the win condition to get end game result
        checkWinner();
    }
}

//Function exp to get the winner, end game result 
const checkWinner = () => {
    //check for game is active or not
    if(gameIsActive){
        //loop to check the winning pattern
        for(let i = 0; i < winPattern.length; i++){
            //check tic-tac-toe played position and compare it with winning patterns
            if(gameState[winPattern[i][0]] === 0 
                && gameState[winPattern[i][1]] === 0
                && gameState[winPattern[i][2]] === 0 
                && gameState[winPattern[i][0]] !== 2){
                    //if winner found change the game is active to false
                    gameIsActive = false;
                    //show the result 
                    displayWinner(0);
                    return;
                } else if(gameState[winPattern[i][0]] === 1 
                    && gameState[winPattern[i][1]] === 1
                    && gameState[winPattern[i][2]] === 1 
                    && gameState[winPattern[i][0]] !== 2){
                        gameIsActive = false;
                        displayWinner(1);
                        return;
                }
            }
    //check for draw or cats game        
    if(gameIsActive){
        //assume game over true
        let gameIsOver = true;
        //loop to check the positions on board played
        for(const prop of gameState) {
            //check for not played positions
            if(prop === 2) {
                //set game over false, position still left to play
                gameIsOver = false;
                }                        
            }
            //check game over true
            if(gameIsOver) {
                //set game active false
                gameIsActive = false;
                //display result, cats game
                displayWinner();
                }
        }
    }
}

//Function exp to setup the cells 
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
//add event event listeners to all the cells
for(const prop of cells) {
        prop.addEventListener("click", play);
}
//add event listener to New Game button to rest the game
resetButton.addEventListener("click", resetAll);


