import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Card from '../components/Card';
import Game from '../components/Game';

class GameContainer extends Component {
    render() {
        const { level } = this.props;
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
        return (
            <div>
                <div className={'flex flex-row'}>
                    <Card
                        top={'Möglich in'}
                        value={possibleIn}
                        bottom={'Zügen'}
                    />
                </div>
                <Game size={size} blocks={blocks} />
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map)
};

export default GameContainer;
