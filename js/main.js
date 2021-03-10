const start = document.getElementById('start');
const title = document.getElementById('title');
const directions = document.getElementById('directions');
const sig = document.getElementById('sig');







class Player {
    constructor(name, score, symbol) {
        this.name = name;
        this.score = score;
        this.symbol = symbol;
    }

     playerName(string){

        this.name = string;
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



        // let arrayOfPlayer = [p1,p2];


        // for(let i = 0; i <= arrayOfPlayer.length; i++){
        //     arrayOfPlayer[i];

        // }


        start.addEventListener('click', () =>{

            this.player1.playerName(textInputBoxPlayerOne.value);
            this.player2.playerName(textInputBoxPlayerTwo.value);
            this.generateBoard();

            console.log(this.player1);
            console.log(this.player2);

        } );

        


    }

    // Creates the tiles
    generateBoard() {

        playerOneInstruct.style.visibility = 'hidden';
        playerTwoInstruct.style.visibility = 'hidden';
        playerOneInput.style.visibility = 'hidden';
        playerTwoInput.style.visibility = 'hidden';
        start.style.visibility = "hidden";
        title.style.visibility = "hidden"; 
        directions.style.visibility = "hidden";
        sig.style.visibility = "hidden";

        let grid = document.createElement('div');
            grid.setAttribute("class",'grid');

        for (let i = 0; i < 9; i++) {

           
           grid.appendChild();

        }

    }
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