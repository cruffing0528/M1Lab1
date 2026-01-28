var coinFlip;

for (var i = 0; i < 10; i++) {  
    coinFlip = Math.floor(Math.random() * 2);
}

if (coinFlip === 0) { 
    window.console.log("Heads");
} else {
    window.console.log("Tails");
}