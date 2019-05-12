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
            <div className={'w-full'}>
                <div className={'flex flex-row justify-between w-full'}>
                    <Card top={'Züge'} value={'0'} />
                    <Card
                        top={'Möglich in'}
                        value={possibleIn.toString()}
                        bottom={'Zügen'}
                    />
                    <Card top={'Reset'} value={'>'} />
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
