const homePlus1 = document.getElementById('home-plus-1');
const homePlus2 = document.getElementById('home-plus-2');
const homePlus3 = document.getElementById('home-plus-3');
const guestPlus1 = document.getElementById('guest-plus-1');
const guestPlus2 = document.getElementById('guest-plus-2');
const guestPlus3 = document.getElementById('guest-plus-3');
const homeScoreDisplay = document.getElementById('home-score');
const guestScoreDisplay = document.getElementById('guest-score');
const ScoreBoard = document.getElementsByClassName('scoreboard');


let homeScore = 0;
let guestScore = 0;

function incrementHomeScore() {
    homeScore++
    homeScoreDisplay.textContent = homeScore
}
function incrementGuestScore() {
    guestScore++
    guestScoreDisplay.textContent = guestScore
}

// check the leader
function theLeader() {
    if (homeScore > guestScore) {
        ScoreBoard[0].setAttribute('id','theleader');
        ScoreBoard[1].removeAttribute('id','theleader');
    } else {
        ScoreBoard[1].setAttribute('id','theleader');
        ScoreBoard[0].removeAttribute('id','theleader');
    } 
}

// when click increment home score function 
homePlus1.addEventListener('click', () => {
    incrementHomeScore()
    theLeader()
})
homePlus2.addEventListener('click', () => {
    incrementHomeScore()
    incrementHomeScore()
    theLeader()
})
homePlus3.addEventListener('click', () => {
    incrementHomeScore()
    incrementHomeScore()
    incrementHomeScore()
    theLeader()
})

// when click increment guest score function 
guestPlus1.addEventListener('click', () => {
    incrementGuestScore()
    theLeader()
})
guestPlus2.addEventListener('click', () => {
    incrementGuestScore()
    incrementGuestScore()
    theLeader()
})
guestPlus3.addEventListener('click', () => {
    incrementGuestScore()
    incrementGuestScore()
    incrementGuestScore()
    theLeader()
})

// new game button