import React from 'react';
import PropTypes from 'prop-types';

const Level = props => {
    const { id, completed, completedBest, className, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={
                'w-24 h-24 flex justify-center items-center p-2 cursor-pointer ' +
                className
            }
            style={{ boxSizing: 'border-box' }}
        >
            <div
                className={
                    'w-full h-full bg-white rounded text-center flex flex-row items-center justify-center'
                }
            >
                <span className={'text-3xl font-roboto text-primary'}>
                    {id}
                </span>
            </div>
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
