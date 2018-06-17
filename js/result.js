const moveCounterElement = document.getElementById("move-counter-element");
const restartButton = document.getElementById("restart-button");
const totalTimeElement = document.getElementById("total-time-element");

var moveCount = localStorage.getItem("moveCount");
var totalTime = localStorage.getItem("totalTime");

initialize();

function initialize() {
  setMoveCounter();
  setTotalTime();
}

restartButton.addEventListener("click", function(element){
  window.location.href = "index.html";
});

// Set move count
function setMoveCounter() {
  moveCounterElement.textContent = moveCount;
}

function setTotalTime() {
  totalTimeElement.textContent = Number(totalTime).toFixed(2);
}
