import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { Swipeable } from 'react-swipeable';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level,
            moves: 0
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
        let movableBlocks = blocks.filter(b => b.type === BLOCK_TYPE_MOVE);
        let sortedBlocks = movableBlocks.sort((a, b) => (b.x - a.x) * stepX);
        sortedBlocks = sortedBlocks.sort((a, b) => (b.y - a.y) * stepY);
        let moved = false;
        for (let i = 0; i < sortedBlocks.size; i++) {
            let block = sortedBlocks.get(i);
            if (block.type === BLOCK_TYPE_MOVE) {
                block.lastX = block.x;
                block.lastY = block.y;
                while (!this.getBlockAt(block.x + stepX, block.y + stepY)) {
                    block.x += stepX;
                    block.y += stepY;
                    moved = true;
                }
            }
        }
        if (moved) {
            this.setState({
                moves: this.state.moves + 1
            });
        }
        this.forceUpdate();
        this.checkIfFinished();
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
                return block;
        }
        return false;
    }

    checkIfFinished() {
        const { level } = this.state;
        const blocks = level.get('blocks');
        for (let i = 0; i < blocks.size; i++) {
            let block = blocks.get(i);
            if (
                block.type === BLOCK_TYPE_TARGET &&
                this.getBlockAt(block.x, block.y).color !== block.color
            ) {
                return false;
            }
        }

        this.finish();
    }

    finish() {}

    render() {
        const { level, moves } = this.state;
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
        const config = {
            onSwipedLeft: () => this.moveLeft(),
            onSwipedRight: () => this.moveRight(),
            onSwipedUp: () => this.moveTop(),
            onSwipedDown: () => this.moveBottom(),
            preventDefaultTouchmoveEvent: true,
            trackMouse: true,
            delta: 50
        };
        return (
            <div className={'w-full'}>
                <div className={'flex flex-row justify-between w-full'}>
                    <Card top={'Züge'} value={moves.toString()} />
                    <Card
                        top={'Möglich in'}
                        value={possibleIn.toString()}
                        bottom={'Zügen'}
                    />
                    <Card top={'Reset'} value={'>'} />
                </div>
                <Swipeable {...config}>
                    <Game size={size} blocks={blocks} anim={moves} />
                </Swipeable>
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map)
};

export default GameContainer;
