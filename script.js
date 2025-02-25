const symbols = ['🍒', '🍋', '🍊', '🍇', '💎', '🔔', '7'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    // Simulate spinning with a delay
    result.textContent = "Spinning...";
    
    setTimeout(() => {
        const symbol1 = getRandomSymbol();
        const symbol2 = getRandomSymbol();
        const symbol3 = getRandomSymbol();

        reel1.textContent = symbol1;
        reel2.textContent = symbol2;
        reel3.textContent = symbol3;

        // Check for a win (all three symbols match)
        if (symbol1 === symbol2 && symbol2 === symbol3) {
            result.textContent = "Jackpot! You win!";
        } else {
            result.textContent = "Try again!";
        }
    }, 1000); // 1-second delay for "spinning" effect
}
