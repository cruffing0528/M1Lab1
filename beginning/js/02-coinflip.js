// coinFlip returns 0 or 1
var coinFlip = Math.floor(Math.random() * 2);
console.log("coinFlip is " + coinFlip);
var choice = window.prompt("Heads or Tails");
var result;

// if (coinFlip === 0) { 
//     result = "Heads";
// } else {
//     result = "Tails";
// }

if (!coinFlip) {
   result = "Heads";
} else {
    result = "Tails";
}

if (result === "Heads" && choice === "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (result === "Heads" && choice === "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (result === "Tails" && choice === "Heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (result === "Tails" && choice === "Tails") {
    window.alert("The flip was tails and you chose tails...you win!");
}