import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const { top, value, bottom, onClick } = this.props;
        return (
            <div
                className={'w-24 h-24 p-2 ' + (onClick ? 'cursor-pointer' : '')}
            >
                <div
                    onClick={onClick}
                    className={
                        'flex flex-col items-center bg-white rounded h-full w-full justify-around py-2'
                    }
                >
                    <span className={'text-grey-dark text-xxs h-3'}>
                        {top && top.toUpperCase()}
                    </span>
                    <span className={'text-3xl'}>{value}</span>
                    <span className={'text-grey-dark text-xxs h-3'}>
                        {bottom && bottom.toUpperCase()}
                    </span>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    top: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    bottom: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;
