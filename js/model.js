//-----------------------------------M-O-D-E-L-----------------------------------------------------------------------------
/* 
The purpose of this js file is to create classes for player and the gameBoard;

Player Class:
    "playerName": Will store the player's name (String)
    "score": Will store the score of the player (Integer)
    "Symbol: Will store the symbol" (String )
*/
class Player {
    constructor(playerName, score, score, symbol) {
        this.playerName = playerName;
        this.score = score;
        this.symbol = symbol;
    }
}
/*
GameBoard: 
    "slots": will keep track of the slots that have been selected. 
    "finishGame": will trigger true if the victory conditions come into play. 
*/
class GameBoard {

    slots = [
        //  [0]  [1]  [2]
        " ", " ", " ",

        //  [3]  [4]  [5]
        " ", " ", " ",

        //  [6]  [7]  [8]
        " ", " ", " "
    ];
    finishGame = false;
}