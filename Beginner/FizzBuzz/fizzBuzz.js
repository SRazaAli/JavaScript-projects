let userInput = Number(prompt("Enter a number ;)"));

switch(true){
    case (userInput%5) == 0 && (userInput%3 == 0):
        document.getElementById("display").innerHTML = "FizzBuzz!";
        break;
    
    case (userInput%5 == 0) :
         document.getElementById("display").innerHTML = "Fizz!";
        break;

    case (userInput%3 == 0):
        document.getElementById("display").innerHTML = "Buzz!";
        break;

    case isNaN(userInput):
        document.getElementById("display").innerHTML = `that is not a number :(`;
        break;
    
    default:
        document.getElementById("display").innerHTML = userInput;
}