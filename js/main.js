
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

let turn = 0;



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
        this.arraySlots = [ null ,null ,null
                           ,null, null, null
                           ,null,null ,null]




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
            this.player2.setCurrentScore(savedScoreForPlayerTwo);
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
        // playerOneInstruct.style.visibility = 'hidden';
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









        const app = document.getElementById('ren');


        const container = this.generateHTML('div', 'container', "", "", app);


        // params 3
        const row = this.generateHTML('div', 'row', "", "", container);




        for (let index = 0; index < 9; index++) {

            // For the the slots in the game. 
            // params 5
            this.generateHTML("button", "col-4", index, this.checkWinCondition.bind(this, index), row, index);

        


            cl(this.arraySlots);

        }

        playerOneInstruct.innerHTML = this.player1.name + "'s turn!";



    }

    // This will check the win condition. 
    checkWinCondition(index) {

        // Win conditions: '012', '345', '678', '036', '147', '258', '048', '246'

        



        let playerInGame = [this.player1.name, this.player2.name];
        let playerInSymbol = [this.player1.symbol, this.player2.symbol];
        let playerScoreArray = [this.player1.score, this.player2.score];

        // Worse part of my code. 
        // Working on better solutions. 
        if(this.arraySlots[index] !== null){

            alert("This slot is already taken.")


        }else{

            this.arraySlots[index] = playerInSymbol[turn];
            document.getElementById(index).innerHTML = playerInSymbol[turn];
            turn = Number(!turn);
            
        }

        // Winning Conditions:


         if (this.arraySlots[0] && this.arraySlots[1] && this.arraySlots[2] === "X" ) {

            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

            // playerScoreArray[turn] += 1;


            // saveMyScore(playerScoreArray);

        } else if(this.arraySlots[0] && this.arraySlots[1] && this.arraySlots[2] === "O"){


            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";


        }else if(this.arraySlots[3] && this.arraySlots[4] && this.arraySlots[5] === "X"){

            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";


        }else if(this.arraySlots[3] && this.arraySlots[4] && this.arraySlots[5] === "O"){

            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";

        } 
        else if(this.arraySlots[6] && this.arraySlots[7] && this.arraySlots[8] === "X"){

            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[6] && this.arraySlots[7] && this.arraySlots[8] === "O"){

            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";

        }else if(this.arraySlots[0] && this.arraySlots[3] && this.arraySlots[6] === "X"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[0] && this.arraySlots[3] && this.arraySlots[6] === "O"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";

        }else if(this.arraySlots[1] && this.arraySlots[4] && this.arraySlots[7] === "X"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[1] && this.arraySlots[4] && this.arraySlots[7] === "O"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";

        } else if(this.arraySlots[2] && this.arraySlots[5] && this.arraySlots[8] === "X"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[2] && this.arraySlots[5] && this.arraySlots[8] === "O"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";

        }else if(this.arraySlots[0] && this.arraySlots[4] && this.arraySlots[8] === "X"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[0] && this.arraySlots[4] && this.arraySlots[8] === "O"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";
        } 
        else if(this.arraySlots[2] && this.arraySlots[4] && this.arraySlots[6] === "X"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[0] + " Wins";

        }else if(this.arraySlots[2] && this.arraySlots[4] && this.arraySlots[6] === "O"){
            playerOneInstruct.style.visibility= "hidden";

            title.innerText = playerInGame[1] + " Wins";
        }
        
        
        
        else if(!this.arraySlots.includes(null)){



            playerOneInstruct.style.visibility= "hidden";


            title.innerText = "It's a tie!";

        }else{



            playerOneInstruct.innerHTML = playerInGame[turn] + "'s turn!";
            

        }



        


        cl(index);



        cl(this.arraySlots);

        cl(turn);

    }






    //Creates the HTML elements for the slots.
    // definition params = 5
    generateHTML(type, classes, text, thisFunction = "", parent = "", id) {


        const element = document.createElement(type);

        element.classList.add(classes);
        element.innerHTML = text;
        element.setAttribute("id", id);


    


        




        if (thisFunction) {
            element.addEventListener('click', thisFunction);
        }

        if (parent) {

            parent.appendChild(element)
        }
        return element;

    }

}


function saveMyScore(newScore){



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
function startOver() {
    location.reload();
}
function listner() {

}

