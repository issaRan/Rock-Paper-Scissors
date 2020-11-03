let playerScore = 0;
let computerScore = 0;

const game = () => {
    const startGame = () => {
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
    options.forEach(option=>{
        option.addEventListener('click',function(){
            const randomNumberForOption = Math.floor(Math.random() * 3);
            checkWinner(this.textContent,computerOptions[randomNumberForOption])
            playerHand.src = `./assets/${this.textContent}.png`
            computerHand.src = `./assets/${computerOptions[randomNumberForOption]}.png`
            updateScore()
            if(playerScore == 5 || computerScore == 5){
                match.classList.add('fadeOut')
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
    console.log(player)
    console.log(computer)
    const winner = document.querySelector(".winner")
    console.log(winner)
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