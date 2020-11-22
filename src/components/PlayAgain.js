import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/playAgain.css';

const PlayAgain = props => {
    return (<div className="game-done">
        <div className="message"
             style={{color: props.status === 'lost' ? 'red' : 'green'}}>
            {props.status === 'lost' ? 'Game Over' : 'Nice'}
        </div>

        <button className='play-again' onClick={props.resetGame}> Play again</button>
    </div>);
}


PlayAgain.propTypes = {
    status: PropTypes.string,
    resetGame: PropTypes.func,
};

export default PlayAgain;