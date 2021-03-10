

// Connecting the element from the HTML to JS
const start = document.getElementById('start');
const title = document.getElementById('title');
const directions = document.getElementById('directions');
const sig = document.getElementById('sig');



// These variables are to save the player's score;
// Player 1 saved Score
let savedScoreForPlayerOne = 0;
// Player 2 saved Score
let savedScoreForPlayerTwo = 0;



//----------------------C-L-A-S-S-:----P-L-A-Y-E-R--------------------------------------------------------------------------------------------------
/*

For the player class will be use to store the name and the amount of wins the player will have
I 





*/


class Player {
    constructor(name, score, symbol) {
        this.name = name;
        this.score = score;
        this.symbol = symbol;
    }

    playerName(string) {


        this.name = string;
    }


    setCurrentScore(theScore){
        this.score = theScore
    }

}


class Game {
    constructor() {
        this.player1 = new Player("Player 1", 0, "X");
        this.player2 = new Player("Player 2", 0, "O");
    }

    init() {

        let instructions = ['Player 1 type your name:', 'Player 2 type your name:'];
        let textInputBoxPlayerOne = document.createElement('input');
        textInputBoxPlayerOne.appendChild(document.createElement('button'));
        let textInputBoxPlayerTwo = document.createElement('input');



        // Getting the name for player one

        document.getElementById('playerOneInput').appendChild(textInputBoxPlayerOne);
        let p1 = playerOneInstruct.innerHTML = instructions[0];

        // Getting the name for player two

        document.getElementById('playerTwoInput').appendChild(textInputBoxPlayerTwo);
        let p2 = playerTwoInstruct.innerHTML = instructions[1];


        start.addEventListener('click', () => {


            /* 
            Check if the users didn't put nothing in the input box then 
            the their name in default will be "Player 1"/ "Player 2".

            */

            if (textInputBoxPlayerOne.value === "") {
                textInputBoxPlayerOne.value = 'Player 1';

            }
            if (textInputBoxPlayerTwo.value === "") {
                textInputBoxPlayerTwo.value = 'Player 2';
            }

            // Setting the player's name. 

            this.player1.playerName(textInputBoxPlayerOne.value);
            this.player2.playerName(textInputBoxPlayerTwo.value);

            this.player1.setCurrentScore(savedScoreForPlayerOne);
            this.pla
            /*
            Once the users put their name and the score as been saved,
            then the board will be generated. 
            */
            this.generateBoard();

            cl(this.player1);
            cl(this.player2);

        });
    }

    // Creates the tiles
    generateBoard() {

        playerOneInstruct.style.visibility = 'hidden';
        playerTwoInstruct.style.visibility = 'hidden';
        playerOneInput.style.visibility = 'hidden';
        playerTwoInput.style.visibility = 'hidden';
        start.style.visibility = "hidden";

        directions.style.visibility = "hidden";
        sig.style.visibility = "hidden";



        // For the header

        //header.classList.add()
        title.innerText = "Fight!";


        // For the the slots in the game. 
        const grid = document.createElement('div');



        for (let i = 0; i < 9; i++) {

            grid.classList.add("container")
            grid.innerText = "col"







        }

    } 




    
}
// Shortcut to use the terminal 
function cl(check) {
    console.log(check);
}






























class App {

    constructor() {
        this.game = new Game();
    }
    init() {
        console.log("starting the app");
        this.game.init();


    }
}



function init() {

    let a = new App();

    a.init();

    console.log(a);

}