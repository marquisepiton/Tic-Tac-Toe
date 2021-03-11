
//--------------------E-L-E-M-E-N-T-S----------------------------------------------------------------------------------------------------------------------------
// Connecting the element from the HTML to JS

/*
    Elements: 
             ID: 
                - "Start"
                - "Title"
                - "Directions"
                - "sig" (Signature)
*/
const start = document.getElementById('start');
const title = document.getElementById('title');
const directions = document.getElementById('directions');
const sig = document.getElementById('sig');

//---------------------G-L-O-B-A-L--V-A-R-A-I-B-L-E-S-------------------------------------------------------------------------------------------------

// These variables are to save the player's score;
// Player 1 saved Score
let savedScoreForPlayerOne = 0;
// Player 2 saved Score
let savedScoreForPlayerTwo = 0;



//----------------------C-L-A-S-S-:----P-L-A-Y-E-R--------------------------------------------------------------------------------------------------
/*
For the player class will be use to store the name and the amount of 
wins the player will have in the game. 
*/

class Player {
    constructor(name, score, symbol) {
        this.name = name;
        this.score = score;
        this.symbol = symbol;
    }
    // Use to set the player name if called.
    playerName(string) {


        this.name = string;
    }

    // Use to set the player score if called.
    setCurrentScore(theScore) {
        this.score = theScore
    }

}


//----------------------C-L-A-S-S-:----G-A-M-E----------------------------------------------------------------------------------------------------
// The game class will handling the Tic Tac Toe rules. 
class Game {
    /*
    Every new instances of the game. Will create a 2 new instances of player 
    assigning by default: 
              "Name": player 1/ player 2
              "Score": 0 
              Symbol: X/O
    
    */
    constructor() {

        // New instances: player1 & player2.
        this.player1 = new Player("Player 1", 0, "X");
        this.player2 = new Player("Player 2", 0, "O");
    }


    // This function is to set up the properties for the instances for the player class.

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

            // Checking if the output changes the instance player's name. 

            cl(this.player1);
            cl(this.player2);

        });
    }

    // This functions will transition into the game. and create the tiles. 
    generateBoard() {

        /*
        After the user clicks on the start button, a lot of the elements that are on the
        page will disappear. and generate the tic tac toe board. 
        */

        // Player one Instructions
        playerOneInstruct.style.visibility = 'hidden';
        // Player two Instructions 
        playerTwoInstruct.style.visibility = 'hidden';
        // Player one input box 
        playerOneInput.style.visibility = 'hidden';
        // Player two input box 
        playerTwoInput.style.visibility = 'hidden';
        // The start button
        start.style.visibility = "hidden";



        // The directions to start the game. 
        directions.style.visibility = "hidden";

        // My signature
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

    // This will check the win condition. 
    checkWinCondition(){

    }

    move(){
        
    }





}
//------------------------------C-L-A-S-S-:-A-P-P----------------------------------------------------------------------------------------------------------------
/*

Class App is my container class. Every time the game is run,
it creates a new instance of game which then creates a 2 new instances
of player. 
*/
class App {

    constructor() {
        this.game = new Game();
    }
    init() {
        console.log("starting the app");
        this.game.init();


    }
}


/*
WHAT I'M THINKING: 
****************************************************PROGRAM**********************************************************************************************************
1. User opens the page.
        -- init();
    2. A new instances of "App" ("a") is created.

        -- new instance of App

        3. The new "a" will automatically create a new instance of "Game"

            -- new instance of Game

            4. The new instance of game will automatically create 2 "Player" instances.

                -- 2 new instance of player

                5. Once the user edits the input box for player 1, 2, and hits start, will start the game.

                    -- game.init();

                    6. The game object will create generate the tile/slots for the TicTacToe board. using function: "generateBoard"
                        
                        -- game.generateBoard();

                        7. While the user/users are playing. the game object will check the win conditions by using function: "checkWinCondition" 

                            -- game.CheckWinCondition();

                            8. The wining player will be rewarded with a point at the end of the game. 

                                -- game.CheckWinCondition();

                                9. The program will saved there score their score. 
*****************************************************************************************************************************
When the user first opens the page/app, 
function "init" will run and create a new 
instance of "App".
*/
function init() {
    // create a new instance of App. 
    let a = new App();

    a.init();
    // Check if the program creates a new instance of App
    console.log(a);

}


//-----------------------------------H-E-L-P-E-R------F-U-N-C-T-I-O-N-----------------------------------------------------------------------------------------------
// Shortcut function to use the terminal (Helper function)
function cl(check) {
    console.log(check);
}
// Will Refresh the whole page. and put all progress at default.
function startOver(){
    location.reload();
}
