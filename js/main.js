const start = document.getElementById('start');
const title = document.getElementById('title');
const directions = document.getElementById('directions');
const sig = document.getElementById('sig');

const playerOneMaker = document.getElementById('playerOneMaker');
const playerTwoMaker = document.getElementById('playerTwoMaker');


start.addEventListener('click',hideMe);


function hideMe(){

    start.style.visibility = "hidden";
    title.style.visibility = "hidden";
    directions.style.visibility = "hidden";
    sig.style.visibility = "hidden";

}

 
class Player{
    constructor(name,score,symbol){
        this.name = name;
        this.score = score;
        this.symbol = symbol;
    }
}


class Game {
    constructor(){
        this.player1 = new Player("Player 1",0,"X");
        this.player2 = new Player("Player 2",0,"O");
    }

    init(){
        let instructions = ['Player 1 type your name:','Player 2 type your name:'];
        let textInputBoxPlayerOne = document.createElement('input');
        let textInputBoxPlayerTwo = document.createElement('input');



        // Getting the name for player one
       
        let playerOneName = document.getElementById('playerOneInput').appendChild(textInputBoxPlayerOne);
        let p1 =  playerOneInstruct.innerHTML = instructions[0];  
        
        

    

        // Getting the name for player two
        
        let playerTwoName = document.getElementById('playerTwoInput').appendChild(textInputBoxPlayerTwo);
        let p2  = PlayerTwoInstruct.innerHTML = instructions[1];



        let arrayOfPlayer = [p1,p2];


        for(let i = 0; i <= arrayOfPlayer.length; i++){
            arrayOfPlayer[i];
        }





        this.player1 = playerOneName.value;
        this.player2 = playerTwoName.value;




        generateBoard();
        

    }

    // Creates the tiles
    generateBoard(){

        for(let i = 0; i <=9; i++){

        }

    }
}






























class App {

    constructor(){
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