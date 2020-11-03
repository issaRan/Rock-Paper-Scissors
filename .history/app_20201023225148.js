const game = () => {
    console.log("buga")
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playerBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector('intro')
        const match = document.querySelector('.match')
        console.log(playerBtn)
        playerBtn.addEventListener('click',() => {
            introScreen.classList.add('fadeOut')
        });
    }
    startGame();
};