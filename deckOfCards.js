/* 

function makeDeck() { 
    const deck = [];
    const suits = ['hearts','diamonds','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
    for (let value of values.split(',')) {
        for (let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop()
}

// const myDeck = makeDeck();
// cosnt card1 = drawCard(myDeck);

*/

const myDeck = { 
    deck : [],
    drawnCards : [],
    suits : ['hearts','diamonds','spades','clubs'],
    values : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
    const {
        suits,
        values,
        deck
        } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
        // return deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    }
}