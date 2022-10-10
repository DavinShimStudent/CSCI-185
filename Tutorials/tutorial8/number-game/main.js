// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;


const guess = document.querySelector('#guess')
let clickCount = 0
function check() {
    // your code here.
    console.log("your code here!");
    let userGuess = Number(guess.value);

    clickCount += 1;
    
    if(userGuess < secret)
    {document.querySelector('#message').innerHTML = "too low";}
    if(userGuess > secret)
    {document.querySelector('#message').innerHTML = "too high";}
    if(userGuess == secret){
        document.querySelector('#celebrate').className = "";
        document.querySelector('#message').innerHTML = " ";
        document.querySelector('#num-guesses').innerHTML = "you got in " + clickCount + " guesse(s)";
    }

}