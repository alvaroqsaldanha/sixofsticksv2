import React, { useState, useEffect } from 'react';
import _10ofclubs from './Assets/imgs/cards/10ofclubs.png';
import _10ofdiamonds from './Assets/imgs/cards/10ofdiamonds.png';
import _10ofhearts from './Assets/imgs/cards/10ofhearts.png';
import _10ofspades from './Assets/imgs/cards/10ofspades.png';
import _2ofclubs from './Assets/imgs/cards/2ofclubs.png';
import _2ofdiamonds from './Assets/imgs/cards/2ofdiamonds.png';
import _2ofhearts from './Assets/imgs/cards/2ofhearts.png';
import _2ofspades from './Assets/imgs/cards/2ofspades.png';
import _3ofclubs from './Assets/imgs/cards/3ofclubs.png';
import _3ofdiamonds from './Assets/imgs/cards/3ofdiamonds.png';
import _3ofhearts from './Assets/imgs/cards/3ofhearts.png';
import _3ofspades from './Assets/imgs/cards/3ofspades.png';
import _4ofclubs from './Assets/imgs/cards/4ofclubs.png';
import _4ofdiamonds from './Assets/imgs/cards/4ofdiamonds.png';
import _4ofhearts from './Assets/imgs/cards/4ofhearts.png';
import _4ofspades from './Assets/imgs/cards/4ofspades.png';
import _5ofclubs from './Assets/imgs/cards/5ofclubs.png';
import _5ofdiamonds from './Assets/imgs/cards/5ofdiamonds.png';
import _5ofhearts from './Assets/imgs/cards/5ofhearts.png';
import _5ofspades from './Assets/imgs/cards/5ofspades.png';
import _6ofclubs from './Assets/imgs/cards/6ofclubs.png';
import _6ofdiamonds from './Assets/imgs/cards/6ofdiamonds.png';
import _6ofhearts from './Assets/imgs/cards/6ofhearts.png';
import _6ofspades from './Assets/imgs/cards/6ofspades.png';
import _7ofclubs from './Assets/imgs/cards/7ofclubs.png';
import _7ofdiamonds from './Assets/imgs/cards/7ofdiamonds.png';
import _7ofhearts from './Assets/imgs/cards/7ofhearts.png';
import _7ofspades from './Assets/imgs/cards/7ofspades.png';
import _8ofclubs from './Assets/imgs/cards/8ofclubs.png';
import _8ofdiamonds from './Assets/imgs/cards/8ofdiamonds.png';
import _8ofhearts from './Assets/imgs/cards/8ofhearts.png';
import _8ofspades from './Assets/imgs/cards/8ofspades.png';
import _9ofclubs from './Assets/imgs/cards/9ofclubs.png';
import _9ofdiamonds from './Assets/imgs/cards/9ofdiamonds.png';
import _9ofhearts from './Assets/imgs/cards/9ofhearts.png';
import _9ofspades from './Assets/imgs/cards/9ofspades.png';
import aceofclubs from './Assets/imgs/cards/aceofclubs.png';
import aceofdiamonds from './Assets/imgs/cards/aceofdiamonds.png';
import aceofhearts from './Assets/imgs/cards/aceofhearts.png';
import aceofspades from './Assets/imgs/cards/aceofspades.png';
import blackjoker from './Assets/imgs/cards/blackjoker.png';
import redjoker from './Assets/imgs/cards/blackjoker.png';
import jackofclubs2 from './Assets/imgs/cards/jackofclubs2.png';
import jackofdiamonds2 from './Assets/imgs/cards/jackofdiamonds2.png';
import jackofhearts2 from './Assets/imgs/cards/jackofhearts2.png';
import jackofspades2 from './Assets/imgs/cards/jackofspades2.png';
import kingofclubs2 from './Assets/imgs/cards/kingofclubs2.png';
import kingofdiamonds2 from './Assets/imgs/cards/kingofdiamonds2.png';
import kingofhearts2 from './Assets/imgs/cards/kingofhearts2.png';
import kingofspades2 from './Assets/imgs/cards/kingofspades2.png';
import queenofclubs2 from './Assets/imgs/cards/queenofclubs2.png';
import queenofdiamonds2 from './Assets/imgs/cards/queenofdiamonds2.png';
import queenofhearts2 from './Assets/imgs/cards/queenofhearts2.png';
import queenofspades2 from './Assets/imgs/cards/queenofspades2.png';

const Card = ({ card, onClick }) => (
    <img src={card} alt={card} style={{ width: '70%', height: '70%', cursor: 'pointer', display: 'block' }} onClick={onClick} />
);

const NUM_CARDS = 54;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const App = () => {
     const cards = [
        _2ofclubs, _2ofdiamonds, _2ofhearts, _2ofspades,
        _3ofclubs, _3ofdiamonds, _3ofhearts, _3ofspades,
        _4ofclubs, _4ofdiamonds, _4ofhearts, _4ofspades,
        _5ofclubs, _5ofdiamonds, _5ofhearts, _5ofspades,
        _6ofclubs, _6ofdiamonds, _6ofhearts, _6ofspades,
        _7ofclubs, _7ofdiamonds, _7ofhearts, _7ofspades,
        _8ofclubs, _8ofdiamonds, _8ofhearts, _8ofspades,
        _9ofclubs, _9ofdiamonds, _9ofhearts, _9ofspades,
        _10ofclubs, _10ofdiamonds, _10ofhearts, _10ofspades,
        jackofclubs2, jackofdiamonds2, jackofhearts2, jackofspades2,
        queenofclubs2, queenofdiamonds2, queenofhearts2, queenofspades2,
        kingofclubs2, kingofdiamonds2, kingofhearts2, kingofspades2,
        aceofclubs, aceofdiamonds, aceofhearts, aceofspades, blackjoker, redjoker
     ];
    const [shuffledCards, setShuffledCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const initialCards = Array.from({ length: NUM_CARDS }, (_, index) => index);
        const shuffled = shuffleArray(initialCards);
        setShuffledCards(shuffled);
    }, []);

    function handleNewCard() {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            console.log(shuffledCards.length)
            return nextIndex >= NUM_CARDS ? 0 : nextIndex;
        });
    }

    return (
        <div style={{ backgroundColor: 'green', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white' }}>{NUM_CARDS - currentIndex} Cards Left</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={cards[shuffledCards[currentIndex]]} alt="Random Card" style={{ maxWidth: '50%', height: 'auto', cursor: 'pointer', display: 'block' }} onClick={handleNewCard} />
            </div>
        </div>

    );
};

export default App;
