const totalTimeElement = document.querySelector(".total-time");
const moveCounterElement = document.querySelector(".moves");
const starElement = document.querySelector(".stars");
const restartButton = document.querySelector(".restart-button");

let totalTime = localStorage.getItem("totalTime");
let moveCount = localStorage.getItem("moveCount");
let starCount = localStorage.getItem("starCount");
let hour = localStorage.getItem("hour");
let minute = localStorage.getItem("minute");
let second = localStorage.getItem("second");

initialize();

function initialize() {
  setRating();
  setMoveCounter();
  setTotalTime();
  setRestartClickListener();
}

// Sets click listener for restart button
function setRestartClickListener() {
  restartButton.addEventListener("click", function(element){
    window.location.href = "index.html";
  });
}

// Sets total time
function setTotalTime() {
  totalTimeElement.textContent = hour + ":" + minute + ":" + second;
}

// Sets rating
function setRating() {
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
