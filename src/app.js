import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Rank and suit data
  const suits = ["♦", "♥", "♠", "♣"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // DOM elements
  const rankElement = document.getElementById('rank');
  const suitElements = document.querySelectorAll('.suit');
  
  // Select a random array element for suit and rank
  const randomPropertySelector = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const randomSuit = randomPropertySelector(suits);
  const randomRank = randomPropertySelector(ranks);
  rankElement.innerHTML = randomRank;
  suitElements.forEach((suitElement) => {
    if(randomSuit === "♥" || randomSuit === "♦") {
      suitElement.style.color = 'var(--bs-danger)';
    }
    suitElement.innerHTML = randomSuit;
  })

  // Display card once it's generated
  document.querySelector('.container').removeAttribute('hidden');
};


