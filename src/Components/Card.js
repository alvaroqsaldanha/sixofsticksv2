
import React from 'react';

const Card = ({ card }) => (
    <img src={`Assets/imgs/cards/${card}.png`} alt={card} style={{ maxWidth: '100%', maxHeight: '100%' }} />
);

export default Card