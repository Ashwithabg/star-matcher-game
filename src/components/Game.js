import React from 'react';
import PlayAgain from './PlayAgain';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import useGameState from './useGameState';
import utils from './utils';
import PropTypes from 'prop-types';


const Game = (props) => {
    const {stars, availableNumbers, candidateNumbers, secondsLeft, setGameState} = useGameState();

    const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
    const gameStatus = availableNumbers.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

    const numberStatus = (number) => {
        if (!availableNumbers.includes(number)) {
            return 'used';
        }
        if (candidateNumbers.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used') {
            return;
        }

        const newCandidateNumbers = currentStatus === 'available' ?
            candidateNumbers.concat(number) :
            candidateNumbers.filter(cn => cn !== number);
        setGameState(newCandidateNumbers);
    };


    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active' ?
                        (<PlayAgain resetGame={props.startNewGame}
                                    status={gameStatus}/>) :
                        (<StarsDisplay count={stars}/>)}

                </div>
                <div className="right">
                    {utils.range(1, 9)
                        .map(num =>
                            <PlayNumber
                                key={num}
                                number={num}
                                status={numberStatus(num)}
                                onClick={onNumberClick}
                            />
                        )}
                </div>
            </div>
            <div className="timer">
                Time Remaining: {secondsLeft}
            </div>
        </div>
    );

};

Game.propTypes = {
    startNewGame: PropTypes.func,
};


export default Game;