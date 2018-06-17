const moveCounterElement = document.getElementById("move-counter-element");
const restartButton = document.getElementById("restart-button");
const totalTimeElement = document.getElementById("total-time-element");
const starElement = document.getElementById("result-stars-element");

var moveCount = localStorage.getItem("moveCount");
var totalTime = localStorage.getItem("totalTime");
var starCount = localStorage.getItem("starCount");
var hour = localStorage.getItem("hour");
var minute = localStorage.getItem("minute");
var second = localStorage.getItem("second");

initialize();

function initialize() {
  setStars();
  setMoveCounter();
  setTotalTime();
}

restartButton.addEventListener("click", function(element){
  window.location.href = "index.html";
});

// Sets total time
function setTotalTime() {
  totalTimeElement.textContent = hour + ":" + minute + ":" + second; 
}

function setStars() {
  for(var i = 0; i < starCount; i++) {
    var li = document.createElement("li");
    var icon = document.createElement("i");
    icon.className = "fa fa-star";
    li.appendChild(icon);
    starElement.appendChild(li);
  }
}

// Sets move count
function setMoveCounter() {
  moveCounterElement.textContent = moveCount;
}
