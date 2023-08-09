const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    //in case of double click on one card:
    if(this === firstCard) return;
this.classList.add('flip');

if(!hasFlippedCard){
    hasFlippedCard = true; //first Click
    firstCard = this;
    //console.log([hasFlippedCard, firstCard]);

} else {
    hasFlippedCard = false; //second Click
    secondCard = this;

    checkForMatch();
  }
}
//Do Cards Match?
//function flipCard(){
    //console.log('I was Clicked!');
    //console.log(this);
//    this.classList.toggle('flip');
function checkForMatch(){
if(firstCard.dataset.framework ===
    secondCard.dataset.framework){
    disableCards();
    } else {
     //its a match
     unFlipCards();

    }
     }
    

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards(){
//not a match
lockBoard = true;
 setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      lockBoard = false}, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;   
});
})();



   
  
cards.forEach(card => card.addEventListener('click',flipCard));