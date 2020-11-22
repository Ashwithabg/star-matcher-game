import React from 'react';
import Game from './Game';
import {useState } from 'react';

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);

    return (
        <header className="App-header">
            <b className='game-name'>Star Matcher Game</b>
            <Game className='game' key={gameId} startNewGame={() => (setGameId(gameId + 1))}/>;
        </header>
    );
}

export default StarMatch;