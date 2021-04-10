//capturing variables
const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2display')
}

const setsQty = document.querySelector('#setsQty');
const resetBtn = document.querySelector('#reset');

//logic
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

//event listeners
p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})

resetBtn.addEventListener('click', function () {
    reset();
})

setsQty.addEventListener('change', function () {
    winningScore = parseInt(this.value); // 'this.value' returns a string
    reset();
})

