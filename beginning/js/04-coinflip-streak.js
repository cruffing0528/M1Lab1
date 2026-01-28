var coinFlip;

do {
    coinFlip = Math.floor(Math.random() * 2);
    window.console.log("Heads");
} while (coinFlip === 0); 
window.console.log("Tails");