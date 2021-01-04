function guessingGame() {
    const secret =  Math.floor(Math.random() * 100);
    let countGuess = 0;
    let gameOver = false;    
    return ((num)=> {
        if (gameOver) return "The game is over, you already won!";
        countGuess++; 
        if(num < secret) return `${num} is too low!`;
        else if(num > secret) return `${num} is too high!`;
        else {
            gameOver = true;
            const guess = countGuess === 1 ? "guess" : "guesses";
            return `You win! You found ${secret} in ${countGuess} ${guess}.`
        }
    })
}

module.exports = { guessingGame };
