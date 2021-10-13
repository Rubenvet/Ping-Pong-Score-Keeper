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











































// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");

// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

// const resetButton = document.querySelector("#resetButton");
// const winningScoreSelect = document.querySelector("#playto");

// let p1Score = 0;
// let p2Score = 0;


// let winningScore = 5;
// let isGameOver = false;


// 


// p1Button.addEventListener("click", function() {
//     
//     if (!isGameOver) {
//         p1Score += 1;
    
//     if (p1Score === winningScore){
//         isGameOver = true;
//         p1Display.classList.add('has-text-success');
//         p2Display.classList.add('has-text-danger');
//         p1Button.disabled = true;
//         p2Button.disabled = true;
        
//     } {
//     p1Display.textContent = p1Score;
//     }
// }
// })

// p2Button.addEventListener("click", function() {
//     if (!isGameOver) {
//         p2Score += 1;
    
//     if (p2Score === winningScore){
//         isGameOver = true;
//         p2Display.classList.add('has-text-success');
//         p1Display.classList.add('has-text-danger');
//         p1Button.disabled = true;
//         p2Button.disabled = true;
        
//     } {
//     p2Display.textContent = p2Score;
//     }
// }})

// winningScoreSelect.addEventListener('change', function() {
//     winningScore = parseInt(this.value);
//     reset();
// })


// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;

//     p1Score = 0;
//     p2Score = 0;

//     p1Display.textContent = 0;
//     p2Display.textContent = 0;

//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-danger', 'has-text-success');

//     p1Button.disabled = false;

//     p2Button.disabled = false;
        
    
// }







































// p1display color change is different        const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");

// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

// const resetButton = document.querySelector("#resetButton");
// const winningScoreSelect = document.querySelector("#playto");

// let p1Score = 0;
// let p2Score = 0;


// let winningScore = 5;
// let isGameOver = false;

// p1Button.addEventListener("click", function() {
//     if (!isGameOver) {
//         p1Score += 1;
    
//     if (p1Score === winningScore){
//         isGameOver = true;
//         p1Display.style.color = 'green';
//         p2Display.style.color = 'red';
//     } {
//     p1Display.textContent = p1Score;
//     }
// }
// })

// p2Button.addEventListener("click", function() {
//     if (!isGameOver) {
//         p2Score += 1;
    
//     if (p2Score === winningScore){
//         isGameOver = true;
//         p1Display.style.color = 'red';
//         p2Display.style.color = 'green';
//     } {
//     p2Display.textContent = p2Score;
//     }
// }})

// winningScoreSelect.addEventListener('change', function() {
//     winningScore = parseInt(this.value);
//     reset();
// })


// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;

//     p1Score = 0;
//     p2Score = 0;

//     p1Display.textContent = 0;
//     p2Display.textContent = 0;

//     p1Display.style.color = '';
//         p2Display.style.color = '';
// }