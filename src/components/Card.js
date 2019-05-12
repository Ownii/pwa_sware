import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const { top, value, bottom } = this.props;
        return (
            <div
                className={
                    'flex flex-col items-center bg-white rounded py-4 w-24'
                }
            >
                <span className={'text-grey-dark text-xs'}>
                    {top.toUpperCase()}
                </span>
                <span className={'my-1 text-3xl'}>{value.toUpperCase()}</span>
                {bottom && (
                    <span className={'text-grey-dark text-xs'}>
                        {bottom.toUpperCase()}
                    </span>
                )}
            </div>
        );
    }
}

Card.propTypes = {
    top: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    bottom: PropTypes.string
};

export default Card;
