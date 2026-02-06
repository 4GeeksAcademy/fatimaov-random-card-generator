import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const generateRandomCard = () => {
  // Rank and suit data
  const suits = ["diamond", "heart", "spade", "club"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Select a random array element for suit and rank
  const randomPropertySelector = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const randomSuit = randomPropertySelector(suits);
  const randomRank = randomPropertySelector(ranks);

  // Generate card HTML structure
  document.getElementById('card').innerHTML = `
    <div class="suit ${randomSuit}"></div> 
    <div id="rank" class="suit-top text-center">${randomRank}</div> 
    <div class="suit suit-bottom text-end ${randomSuit}"></div> 
  `
}

window.onload = function () {
  generateRandomCard();
  // Display card once it's generated
  document.querySelector('.container').removeAttribute('hidden');
};

// Button functionality to generate a new random card
document.querySelector('button').addEventListener('click', generateRandomCard);