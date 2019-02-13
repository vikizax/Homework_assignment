new Vue({
    el: '#app',
    data: {
        //player1 health
        playerOneHealth: 100,
        //player2 health
        playerTwoHealth: 100,
        //keeps track of whether game is running or not
        gameIsRunning: false,
        //keeps track of player turns 0-> player 1, 1->player 2
        playTurn: 0,
        //saves the logs of playerd turns
        turns: [],
        //special attack unlocker
        special: true,
        //player one special attack counter
        specialOne: 3,
        //player two special attack counter
        specialTwo: 3 
    },
    methods: {

        //function to start the game
        startGame: function() {
            this.gameIsRunning = true;
            this.playerOneHealth = 100;
            this.playerTwoHealth = 100;
            this.turns = [];
            this.special = true;
            this.specialOne = 3;
            this.specialTwo = 3;
            
        },
        
        //function to end game
        endGame: function() {
            this.gameIsRunning = false;
        },

        //function for attack
        attack: function() {
            const damage = this.calculateDamage(15, 25);
            this.move(damage);
        },

        //function for special attack
        specialAttack: function() {
            const damage = this.calculateDamage(20, 45);
            if(this.playTurn === 0){
                if(this.specialOne > 0) {
                    this.specialOne--;
                    this.move(damage);
                }
            } else {
                if(this.specialTwo > 0) {
                    this.specialTwo--;
                    this.move(damage);
                }
            }
        },

        //function to apply player move
        move: function(damage) {
            if(this.playTurn === 0) {
                this.playerTwoHealth -= damage;
                this.turns.unshift({
                    isPlayerOne: true,
                    text: 'PLayer 1 Hits Player 2 for ' + damage
                });
                this.playTurn = 1; 
            } else {
                this.playerOneHealth -= damage;
                this.turns.unshift({
                    isPlayerOne: false,
                    text: 'PLayer 2 Hits Player 1 for ' + damage
                });
                this.playTurn = 0;
            }
            if(this.checkWin()) {
                return;
            }
        },

        //function for heal
        heal: function() {
            const healUp = this.calculateHeal(20,45);
            if(this.playTurn === 0){
                if(this.playerOneHealth + healUp > 100){
                    this.playerOneHealth = 100;
                } else {
                    if (this.playerOneHealth <= 90) {
                        this.playerOneHealth += healUp;
                    } else {
                        this.playerOneHealth = 100;
                    }
                }
                this.turns.unshift({
                    isPlayerOne: true,
                    text: 'Player 1 heals for ' + healUp
                });
                this.playTurn = 1;
            }else {
                if(this.playerTwoHealth + healUp > 100){
                    this.playerTwoHealth = 100;
                } else {
                    if (this.playerTwoHealth <= 90) {
                        this.playerTwoHealth += healUp;
                    } else {
                        this.playerTwoHealth = 100;
                    }
                }
                this.turns.unshift({
                    isPlayerOne: false,
                    text: 'Player 2 heals for '+ healUp
                });
                this.playTurn = 0;
            }
        },

        //function to calculate random damage
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        //function to calculate random heal
        calculateHeal: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        //function to check for win
        checkWin: function() {
            if (this.playerOneHealth <= 0) {
                if (confirm('Player 2 Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerTwoHealth <= 0) {
                if (confirm('Player 1 Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
    }
});

