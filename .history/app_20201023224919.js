const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playerBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('intro')
        const match = document.querySelector('.match')

        playerBtn.addEventListener('click',() => {
            introScreen.classList.add('fadeOut')
        });
    }
    startGame();
};