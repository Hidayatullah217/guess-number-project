var tryAgainButton = document.querySelector('.tryAgain')
var showRandomNumber = document.querySelector('.mark')
var userInput = document.querySelector('input')
var checkButton = document.querySelector('.check')
var live = document.querySelector('.live')
var score = document.querySelector('.score')
var highScore = document.querySelector('.highScore')
var winAndLose = document.querySelector('.winAndLose')

// console.log(showRandomNumber)


checkButton.addEventListener('click',()=> {

    var userGuess = Number(userInput.value);
    if (!userGuess) {
        alert("Please enter a number between 1 and 10.");
        return;
      }
    if (userGuess < 0 || userGuess > 9) {
        alert('Please enter a number between 0 and 10.');
        return;
    }
       
    userInput.textContent = ' ';
    if(live.textContent > 0){
    var randomNumber = Math.round(Math.random() *8) + 1
    showRandomNumber.textContent = randomNumber   


    if(userInput.value == randomNumber){
        score.textContent = Number(score.textContent) + 1
        winAndLose.textContent = "YOU WIN"
        winAndLose.style.color = "green"
        
        // live.textContent > 0
        if(highScore.textContent < score.textContent){                          
        highScore.textContent = score.textContent}    

        }else{
            live.textContent = Number(live.textContent) - 1
            userInput.value = userInput.reload 
            winAndLose.textContent = "YOU LOSE"
            winAndLose.style.color = "red"
        }

    }else{
        alert("Please try again")
}} )

tryAgainButton.addEventListener('click', ()=>{

    location.reload()
})




