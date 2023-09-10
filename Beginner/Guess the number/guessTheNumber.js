// Guessing the number game

let userInput = Number(prompt("Enter a number between 0 - 10"));
let random = Math.floor((Math.random()*10) +1);
let guesses = 0;


do{

    if(userInput>random){
        userInput = Number(prompt("Too big! Enter a smaller number"));
        guesses+=1;
    }

    if(userInput<random){
        userInput = Number(prompt("Too small! Enter a bigger number"));
        guesses+=1;
    }

    if(userInput == random){
        console.log("You guessed it right! : " + random);
        console.log("guesses were : " +guesses);
    }
}while(userInput != random);



