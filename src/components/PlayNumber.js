import React  from 'react';
import PropTypes from 'prop-types';


const PlayNumber = props => {
    return (
        <button className="number"
                style={{backgroundColor: colors[props.status]}}
                onClick={() => props.onClick(props.number, props.status)}>
            {props.number}
        </button>
    );
};

PlayNumber.propTypes = {
    number: PropTypes.number,
    status: PropTypes.string,
    onClick: PropTypes.func,
};

export default PlayNumber;

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};