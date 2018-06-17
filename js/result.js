const moveCounterElement = document.getElementById("move-counter-element");
const restartButton = document.getElementById("restart-button");

var moveCount = localStorage.getItem("moveCount");

initialize();

function initialize() {
  setMoveCounter();
}

restartButton.addEventListener("click", function(element){
  window.location.href = "index.html";
});

function setMoveCounter() {
  moveCounterElement.textContent = moveCount;
}