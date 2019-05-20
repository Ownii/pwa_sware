import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { Swipeable } from 'react-swipeable';
import FinishGame from '../components/FinishGame';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: fromJS(this.props.level.toJS()),
            moves: 0
        };
        console.log(this.state);
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
        let sortedBlocks = movableBlocks.sort(
            (a, b) => (b.get('x') - a.get('x')) * stepX
        );
        sortedBlocks = sortedBlocks.sort(
            (a, b) => (b.get('y') - a.get('y')) * stepY
        );
        let moved = false;
        for (let i = 0; i < sortedBlocks.size; i++) {
            let block = sortedBlocks.get(i);
            if (block.get('type') === BLOCK_TYPE_MOVE) {
                block.set('lastX', block.get('x'));
                block.set('lastY', block.get('y'));
                while (
                    !this.getBlockAt(
                        block.get('x') + stepX,
                        block.get('y') + stepY
                    )
                ) {
                    block.set('x', block.get('x') + stepX);
                    block.set('y', block.get('y') + stepY);
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
                block.get('x') === x &&
                block.get('y') === y &&
                block.get('type') !== BLOCK_TYPE_TARGET
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
                block.get('type') === BLOCK_TYPE_TARGET &&
                this.getBlockAt(block.get('x'), block.get('y')).color !==
                    block.get('color')
            ) {
                return false;
            }
        }
        return true;
    }

    restart() {
        const { level } = this.props;
        this.setState({
            level: level,
            moves: 0
        });
    }

    render() {
        const { level, moves } = this.state;
        console.log(level);
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
        console.log(blocks);
        const config = {
            onSwipedLeft: this.moveLeft.bind(this),
            onSwipedRight: this.moveRight.bind(this),
            onSwipedUp: this.moveTop.bind(this),
            onSwipedDown: this.moveBottom.bind(this),
            preventDefaultTouchmoveEvent: true,
            trackMouse: true,
            delta: 50
        };
        return (
            <div className={'w-full'}>
                {this.checkIfFinished() && (
                    <FinishGame
                        moves={moves}
                        possibleIn={possibleIn}
                        onRestart={this.restart.bind(this)}
                    />
                )}
                <div className={'flex flex-row justify-between w-full mt-8'}>
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
