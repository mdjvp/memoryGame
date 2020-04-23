document.addEventListener('DOMContentLoaded', () => {


    //card Options

    const cardArray = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },

        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },

        {
            name:'milkshake',
            img: 'images/milkshake.png'
        },

        {
            name: 'pizza',
            img: 'images/pizza.png'
        },

        {
            name: 'pizza',
            img: 'images/pizza.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var chosenCards = [];
    var chosenCardsId = [];
    const cardsWon = [];
    
  //create the board game
    function createBoard(){
        for (let i=0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard); 
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');

        const optionOneId = chosenCardsId[0];
        const optionTwoId = chosenCardsId[1];

        if(chosenCards[0] === chosenCards[1]) {
            swal("Good job!", "You found a match!");
            cards[optionOneId].setAttribute('src', 'images/blue.png');
            cards[optionTwoId].setAttribute('src', 'images/blue.png');
            cardsWon.push(chosenCards);
        }else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            swal("Sorry!", "Try again !");
        }

        chosenCards = [];
        chosenCardsId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats ! YOU FOUND THEM ALL !!';
        }

    }

    //flip the cards
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        chosenCards.push(cardArray[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)

        if(chosenCards.length === 2 ) {

            setTimeout(checkForMatch, 500);
        }

    }

    createBoard();




});