const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2display")
}

const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playto");


let winningScore = 12;
let isGameOver = false;

// const bg = document.querySelector("#bg");
const bgi = document.querySelector("#bgi");


// bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1519871195344-9d1a2379cea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')"
// bg.style.classList.add('is-fullwidth');

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 2;
    
    if (player.score === winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.disabled = true;
        
    } 
    player.display.textContent = player.score;
    }
}   

p1.button.addEventListener("click", function(){
    updateScore(p1, p2);
})

p2.button.addEventListener("click", function() {
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }   
}
