let y = Math.floor(Math.random() * 6 + 1);
// counting the number of guesses
// made for correct Guess
let guess = 1;
document.getElementById("guess").onclick = function() {
    let x = document.getElementById("guesstext").value;
    if(x == y) 
    {
        alert("Congratulations! You guessed it right with " + guess + " guesses" );
    }
    
    else if(x > y) //*if guessed number is greater than actual number 
    {
        guess++;
        alert("You got it wrong! Try again.");
    }
    
    else 
    {
        alert("You got it wrong! Try again");
    }
};