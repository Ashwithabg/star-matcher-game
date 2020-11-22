import React  from 'react';
import utils from './utils';
import PropTypes from 'prop-types';
import '../stylesheets/stars.css';

const StarsDisplay = props => {
    return (
        <>
            {utils.range(1, props.count)
                .map(starId =>
                    <div key = {starId} className="star"/>)}
        </>
    );
};

StarsDisplay.propTypes = {
    count: PropTypes.string,
};

export default StarsDisplay;