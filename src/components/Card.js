import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return <div />;
    }
}

Card.propTypes = {
    top: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    bottom: PropTypes.string
};

export default Card;
