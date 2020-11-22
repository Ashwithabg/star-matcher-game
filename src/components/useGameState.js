import utils from './utils';
import {useState, useEffect } from 'react';

const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
    const [candidateNumbers, setCandidateNumbers] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timerID = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1)
            }, 1000);
            return () => clearTimeout(timerID);
        }
    });

    const setGameState = (newCandidateNumbers) => {
        if (utils.sum(newCandidateNumbers) !== stars) {
            console.log("inside not condition")
            setCandidateNumbers(newCandidateNumbers);
        } else {

            const newAvailableNumbers = availableNumbers.filter(
                n => !newCandidateNumbers.includes(n)
            );

            setAvailableNumbers(newAvailableNumbers);
            setCandidateNumbers([]);
            setStars(utils.randomSumIn(newAvailableNumbers, 9))
        }
    };

    return {stars, availableNumbers, candidateNumbers, secondsLeft, setGameState};
};

export default useGameState;