const game = () => {
    console.log("buga")
    let playerScore = 0;
    let computerScore = 0;


    const startGame = () => {
        const playerBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector('.match')
        console.log(introScreen)
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
    
    const computerOptions = ['rock','papper','scissors']
    options.forEach(option=>{
        option.addEventListener('click',function(){
            console.log(this)
            const randomNumberForOption = Math.floor(Math.random() * 3);
            checkWinner(this.textContent,computerOptions[randomNumberForOption])
            playerHand.src = `./assets/${this.textContent}.png`
            computerHand.src = `./assets/${this.textContent}.png`
        })
    })
}

const checkWinner = (player,computer) => {
    const winner = document.querySelector('winner')
    if(player == computer){
        winner.textContent = 'Tie !'
        return
    }
    if(player === 'rock'){
        if(computer === 'scissors'){
            winner.textContent = 'Player Wins !'
        }else{
            winner.textContent = 'Computer Wins !'
        }
    }
    if(player === 'scissors'){
        if(computer === 'papper'){
            winner.textContent = 'Player Wins !'
        }else{
            winner.textContent = 'Computer Wins !'
        }
    }
    if(player === 'papper'){
        if(computer === 'rock'){
            winner.textContent = 'Player Wins !'
        }else{
            winner.textContent = 'Computer Wins !'
        }
    }
}
playMatch()
game()