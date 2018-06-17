/*
 * Create a list that holds all of your cards
 */
const deck = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o",
               "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube",
               "fa fa-anchor","fa fa-anchor", "fa fa-leaf", "fa fa-leaf",
               "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
const openCards = [];
const starsElement = document.querySelector(".stars");
const moveCounterElement = document.querySelector(".moves");
const timer = document.querySelector(".timer");
const restartElement = document.querySelector(".restart");
const deckElement = document.querySelector(".deck");
const resultTimeElement = document.querySelector(".total-time");
const resultMoveCounterElement = document.querySelector(".r-moves");
const resultStarElement = document.querySelector(".r-stars");
const restartButton = document.querySelector(".restart-button");

let starCount = 3;
let matchCount = 0;
let moveCount = 0;
let second;
let minute;
let hour;
let interval;

// Get the modal
var modal = document.querySelector(".modal");

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Initialize game
initialize();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function initialize() {
  // Shuffle cards
 var shuffleDeck = shuffle(deck);
 shuffleDeck.forEach(function(element) {
   var icon = document.createElement("i");
   icon.className = element;
   var li = document.createElement("li");
   li.className = "card";
   li.appendChild(icon);
   deckElement.appendChild(li);
 });
 resetMoves();
 resetStars();
 setCardClickListener();
 setRestartClickListener();
 startTimer();
}

// Resets moves
function resetMoves() {
  moveCount = 0;
  moveCounterElement.textContent = moveCount + "  Moves";
}

// Increases moves
function increaseMoves() {
  moveCount++;
  moveCounterElement.textContent = moveCount + "  Moves";
  switch (moveCount) {
    case 20:
      removeStar();
      break;
    case 40:
      removeStar();
      break;
    default:
      return;
  }
}

// Checks open cards
function match(e1, e2) {
  if(e1.childNodes[0].className !== e2.childNodes[0].className) {
    openCards[0].className = "card";
    openCards[1].className = "card";
  } else {
    matchCount++;
    // Check if the cards match
    setTimeout(function(){
      e1.style.backgroundColor = "green";
      e2.style.backgroundColor = "green";
    }, 200);
    if(matchCount === 8) {
      displayResult();
      clearInterval(interval);
    }
  }
  openCards.length = 0;
}

// Reveal cards
function revealCard(target) {
  target.className = "card match";
}

// Adds card to openCards array
function addToOpenCards(card) {
  openCards.push(card);
}

// Removes star
function removeStar() {
  var star = starsElement.children[starCount - 1];
  star.children[0].className = "fa fa-star-o";
  starCount--;
}

// Resets stars
function resetStars() {
  for(var i = 0; i < starsElement.childElementCount; i++){
    var star = starsElement.children[i];
    if(star.children[0].className !== "fa fa-star") {
        star.children[0].className = "fa fa-star";
    }
  }
}

// Removes all child elements of a given element
function removeAllChildElements(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function startTimer() {
  second = 0;
  minute = 0;
  hour = 0;
  interval = setInterval(function() {
    timer.textContent = hour + " hours " + minute + " mins " + second + " seconds ";
    second++;
    if(second === 60) {
      minute++;
      second = 0;
    } if(minute === 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

// Displays resutls as a modal
function displayResult() {
  setTotalTime();
  setRating();
  setMoveCounter();
  setRestartButtonClickListener();
  modal.style.display = "block";
}

// Sets total time for result
function setTotalTime() {
  resultTimeElement.textContent = hour + ":" + minute + ":" + second;
}

// Sets rating for result
function setRating() {
  for(var i = 0; i < starCount; i++) {
    var li = document.createElement("li");
    var icon = document.createElement("i");
    icon.className = "fa fa-star";
    li.appendChild(icon);
    resultStarElement.appendChild(li);
  }
}

// Sets move count result
function setMoveCounter() {
  resultMoveCounterElement.textContent = moveCount;
}

// Sets click listener for each card
 function setCardClickListener() {
   var cardList = Array.from(deckElement.childNodes);
   cardList.forEach(function(card){
     card.addEventListener("click", function(element){
       if(openCards.length < 2) {
         revealCard(element.target);
         addToOpenCards(card);
         increaseMoves();
         if(openCards.length === 2) {
           // Check if the cards match
           setTimeout(function(){
             match(openCards[0], openCards[1]);
           }, 500);
         }
         return;
       }
     });
   });
 }

// Sets click listener for restartElement
 function setRestartClickListener() {
   restartElement.addEventListener("click", function(){
     removeAllChildElements(deckElement);
     clearInterval(interval);
     initialize();
   });
 }

 // Sets click listener for restart button
 function setRestartButtonClickListener() {
   restartButton.addEventListener("click", function(element){
     // window.location.href = "index.html";
     modal.style.display = "none";
     removeAllChildElements(deckElement);
     clearInterval(interval);
     initialize();
   });
 }
