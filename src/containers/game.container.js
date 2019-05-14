import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Card from '../components/Card';
import Game from '../components/Game';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { Swipeable } from 'react-swipeable';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level
        };
    }

    componentDidMount() {
        this.moveTop();
    }

    moveRight() {
        this.move(1, 0);
    }
    moveLeft() {
        this.move(-1, 0);
    }
    moveTop() {
        this.move(0, -1);
    }
    moveBottom() {
        this.move(0, 1);
    }

    move(stepX, stepY) {
        const { level } = this.state;
        const blocks = level.get('blocks');
        let sortedBlocks = blocks.sort((a, b) => a.x - b.x);
        for (let i = 0; i < sortedBlocks.size; i++) {
            let block = sortedBlocks.get(i);
            if (block.type === BLOCK_TYPE_MOVE) {
                while (!this.getBlockAt(block.x + stepX, block.y + stepY)) {
                    block.x += stepX;
                    block.y += stepY;
                }
            }
        }
        this.forceUpdate();
    }

    getBlockAt(x, y) {
        const { level } = this.state;
        const blocks = level.get('blocks');
        const size = level.get('size');
        if (x >= size || y >= size || y < 0 || x < 0) return true;
        for (let i = 0; i < blocks.size; i++) {
            let block = blocks.get(i);
            if (
                block.x === x &&
                block.y === y &&
                block.type !== BLOCK_TYPE_TARGET
            )
                return true;
        }
        return false;
    }
    render() {
        const { level } = this.state;
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
        const config = {
            onSwipedLeft: () => this.moveLeft(),
            onSwipedRight: () => this.moveRight(),
            onSwipedUp: () => this.moveTop(),
            onSwipedDown: () => this.moveBottom(),
            preventDefaultTouchmoveEvent: true,
            trackMouse: true
        };
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
                <Swipeable {...config}>
                    <Game size={size} blocks={blocks} />
                </Swipeable>
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map)
};

export default GameContainer;
