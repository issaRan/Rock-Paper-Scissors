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
    const randomNumberForOption = Math.floor(Math.random() * 3);
    
}
game()