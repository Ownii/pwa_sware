import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

class Game extends Component {
    render() {
        return <div />;
    }
}

Game.propTypes = {
    size: PropTypes.number.isRequired,
    blocks: PropTypes.instanceOf(List).isRequired
};

export default Game;
