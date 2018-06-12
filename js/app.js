/*
 * Create a list that holds all of your cards
 */
 const deck = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o",
               "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube",
               "fa fa-anchor","fa fa-anchor", "fa fa-leaf", "fa fa-leaf",
               "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
const openCards = [];
const deckElement = document.getElementById("deckElement");
const moveCounterElement = document.getElementById("moveCounterElement");

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 // Reset moves
 resetMoves();
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

// Resets moves
function resetMoves() {
  moveCounterElement.textContent = 0;
}

// Increases moves
function increaseMoves() {
  moveCounterElement.textContent++;
}

// Checks open cards
function match(e1, e2) {
  if(e1.childNodes[0].className !== e2.childNodes[0].className) {
    openCards[0].className = "card";
    openCards[1].className = "card";
  }
  openCards.length = 0;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
