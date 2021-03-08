# Tic Tac Toe Pseudo Code 

## Objective:

The user/users will be able to the classic Tic Tac Toe game. 

## Steps:

    STARTS:

        1. User hit the "Start button" 
        2. Program will ask player 1 to type their name .
        3. User hits submit. 
        4. Program will ask player 2 to type their name. 
        5. Program will ask the user to choose their symbol.
        6. Program will choose who will go first in the game. 
        7. Loop:
            - Player 1 put their symbol in the AVAILABLE slots.
            - Player 2 put their symbol in the AVAILABLE slots. 
        8. Program give notify who won the game. 
        9  Program will increment the winning player score.
        10. Program will ask the they would like to play again. 
        - Player hits yes: program go to "Step ".
        - Program ends.
    END. 



## Events:

    - User hits the "Start" button: The game starts
    - User hits the "reset" button: The game resets 
    - User hits "submit" button: Name is submitted in the new player object. 
    - User connect three symbols or no more slots left: the game wins. 
    - Feature: User hits "results" button: Show the stats

## Objects Variables: 

    Js: 
        - 2 Classes:
            - Player:
                - Name (String)
                - Score (Integer)
                - Symbol (String)
            - Board: 
                - Slots (Array)
                
    HTML: 
        - 4 Buttons
        - 2 Text Forms
        - 1 1Header
        - 2 2Header
        - 2 Paragraphs


## Functions/ Structure(MVC): 


VIEW: 

    Listeners: 
        - Start: setGame()
        - Reset: resetGame()
        - Submit: setNewAtrribute()
        - Ready: playGame() 
        - Feature:
            - Result

MODEL: 

    Class: 
        player: 
            - player name;
            - score;
            - symbol;

        Board: 
            - Slots
            - finishGame = false;


CONTROLLER: 

    functions setGame():
        Input: "Player 1 please type your name: "
        Input: "Choose a symbol"
        SET: New Player 1 Class (name,score equal 0, symbol, false)
        Input: "Player 2 please type your name: "
        SET: New Player 2 Class (name,score equal 0, symbol, false)
        Calculate: Who will go first (Randomize function)
        SET: new Board Class
        


    function playGame(): 
        SHOW: GameBoard

        WHILE: Board.finishGame is false: 
            Display: Player 1 turn!
            Input: Clicks on one of the slots with their symbol
            SET: selected slot to locked
            checkGameCondition();


            Display: Player 2 turn!
            Input: Clicks on one of the slots with their symbol
            selected slot to locked
            checkGameCondition();



    function checkGameCondition(): 
        IF: player 1  symbol are inline 3 in row THEN
            Display: Player 1 wins 
            SET: Board.finishGame = true
            INCREMENT: By 1 for player1.score

        IF: player 2  symbol are inline 3 in row THEN
            Display: Player 2 wins 
            Set: Board.finishGame = true
            INCREMENT: By 1 for player2.score



    function resetGame():
        playGame();
        



        

