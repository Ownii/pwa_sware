import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

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
                    'w-full h-full bg-white rounded text-center flex flex-col items-center justify-center'
                }
            >
                <span
                    className={
                        'text-3xl font-roboto ' +
                        (completed ? 'text-primary' : 'text-grey')
                    }
                >
                    {id}
                </span>
                {completedBest && (
                    <span
                        className={'absolute'}
                        style={{ marginLeft: 25, marginTop: 25 }}
                    >
                        <Icon path={mdiStar} size={0.75} color={'#607D8B'} />
                    </span>
                )}
            </div>
        </div>
    );
};

Level.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool,
    completedBest: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Level;
