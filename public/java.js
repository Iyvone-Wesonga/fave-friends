//call all the card divisions to manipulate


const slider = document.querySelector('.slider');
const cards = document.querySelector('.cards');

//the logic is to reassign card indices (the first and the last, so that the last can be cloned as the first and vice versa)
const firstCard = cards.firstElementChild;//the first card in the selected class list...identified as cards
const lastCard = cards.lastElementChild;

//card duplication
const cloneFirst = firstCard.cloneNode(true);
const cloneLast = lastCard.cloneNode(true);

cards.insertBefore(cloneLast, firstCard);
//after cards, clonefirst is appended
cards.appendChild(cloneFirst);

//code above is for normal carousel

