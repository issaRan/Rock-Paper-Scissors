let playerScore = 0;
let computerScore = 0;

const startNew = document.querySelector(".result button")
startNew.addEventListener('click',() => {
    document.querySelector(".result").classList.remove('fadeIn')
    const score = document.querySelector('.score')
    const match = document.querySelector('.match')
    document.querySelector('.theWinner').classList.remove('fadeIn')
    document.querySelector('.theWinner').classList.add('fadeOut')
    document.querySelector(".winner").textContent = 'Choose an option'
    score.classList.remove('fadeOut')
    score.classList.add('fadeIn')
    match.classList.remove('fadeOut')
    playerScore = 0;
    computerScore = 0;
    updateScore()
    game()
});

const game = () => {
    const startGame = () => {
        console.log("whats")
        const playerBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector('.match')
        playerBtn.addEventListener('click',() => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        });
    };
    startGame();
};
const playMatch = () =>{
    const options = document.querySelectorAll(".options button")
    const playerHand = document.querySelector(".player-hand")
    const computerHand = document.querySelector(".computer-hand")
    const computerOptions = ['rock','paper','scissors']
    const announceWinner = document.querySelector(".result")
    const match = document.querySelector('.match')
    const postWinner = document.querySelector('.theWinner')
    const score = document.querySelector('.score')
    options.forEach(option=>{
        console.log("Loop")
        option.addEventListener('click',function(){
            const randomNumberForOption = Math.floor(Math.random() * 3);
            checkWinner(this.textContent,computerOptions[randomNumberForOption])
            playerHand.src = `./assets/${this.textContent}.png`
            computerHand.src = `./assets/${computerOptions[randomNumberForOption]}.png`
            updateScore()
            if(playerScore == 5 || computerScore == 5){
                match.classList.remove('fadeIn')
                match.classList.add('fadeOut')
                score.classList.remove('fadeIn')
                score.classList.add('fadeOut')
                document.querySelector('.theWinner').classList.remove('fadeOut')
                document.querySelector('.theWinner').classList.add('fadeIn')
                playerScore > computerScore ? postWinner.textContent = 'Player Wins !' : postWinner.textContent = 'Computer Wins !'
                announceWinner.classList.add('fadeIn')
            }
        })
    })
}

const updateScore = () =>{
    const pScore = document.querySelector(".player-score p")
    const cScore = document.querySelector(".computer-score p")
    pScore.textContent = playerScore
    cScore.textContent = computerScore
}
const checkWinner = (player,computer) => {
    const winner = document.querySelector(".winner")
    if(player == computer){
        winner.textContent = 'Tie !'
        return
    }
    if(player === 'rock'){
        if(computer === 'scissors'){
            winner.textContent = 'Player Wins !'
            playerScore++;
        }else{
            winner.textContent = 'Computer Wins !'
            computerScore++
        }
    }
    if(player === 'scissors'){
        if(computer === 'paper'){
            winner.textContent = 'Player Wins !'
            playerScore++;
        }else{
            winner.textContent = 'Computer Wins !'
            computerScore++
        }
    }
    if(player === 'paper'){
        if(computer === 'rock'){
            winner.textContent = 'Player Wins !'
            playerScore++;
        }else{
            winner.textContent = 'Computer Wins !'
            computerScore++
        }
    }
}
playMatch()
game()