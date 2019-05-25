import React from 'react';
import PropTypes from 'prop-types';

const Level = props => {
    const { id, completed, completedBest, className, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={
                'w-16 h-16 rounded bg-white flex justify-center items-center ' +
                className
            }
        >
            <span className={'text-3xl font-roboto text-primary'}>{id}</span>
        </div>
    );
};

Level.propTypes = {
    id: PropTypes.number.isRequried,
    completed: PropTypes.bool,
    completedBest: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Level;
