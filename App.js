let messages = document.getElementById('message-el');
let cardsInfo = document.getElementById("cards-details");
let sumInfo = document.getElementById("sum-details");
let isAlive = false;
let hasBlackJack = false;
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let sum = firstCard + secondCard;
let cards = [firstCard , secondCard];
let message = "";
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13 )+ 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}


function startGame(){
    isAlive = true;
    renderGame();
}

function  renderGame(){
    cardsInfo.textContent = "Cards: "
    for(let i =0; i< cards.length; i++){
        cardsInfo.textContent += cards[i] + " "
    }
    if(sum <=20){
        isAlive = true;
        message = "Do you want to draw another card?"
    }
    else if(sum === 21){
        hasBlackJack = true;
        message = "Whoo you got the blackJack"
    }
    else{
        isAlive = false;
        message = " Lol you are out of game"
    }
    messages.textContent = message;
    sumInfo.textContent = "Sum: " +sum;
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomNumber();
    cards.push(card);
    sum +=card;
    renderGame()
}
else{
    messages.textContent ="You are out now"
}
}