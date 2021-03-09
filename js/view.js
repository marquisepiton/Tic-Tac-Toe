//---------------------V-I-E-W--------------------------------------------------------------------------------------------
/*
Initialize Elements:
          ID:
            - "start"
            - "reset"
            - "submit"
            - "ready"
*/


// Elements:
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');
const ready = document.getElementById('ready'); 


start.addEventListener('click',setGame());
reset.addEventListener('click', resetGame());
submit.addEventListener('click', setNewAttribute());
ready.addEventListener('click', playGame());









