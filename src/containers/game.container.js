import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { Swipeable } from 'react-swipeable';
import FinishGame from '../components/FinishGame';
import { mdiRestart, mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '../components/Button';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: fromJS(props.level.toJS()),
            moves: 0
        };
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
        let sortedBlocks = blocks.sort(
            (a, b) => (b.get('x') - a.get('x')) * stepX
        );
        sortedBlocks = sortedBlocks.sort(
            (a, b) => (b.get('y') - a.get('y')) * stepY
        );
        let moved = false;
        for (let i = 0; i < sortedBlocks.size; i++) {
            let block = sortedBlocks.get(i);
            if (block.get('type') === BLOCK_TYPE_MOVE) {
                block = block.set('lastX', block.get('x'));
                block = block.set('lastY', block.get('y'));
                while (
                    !this.getBlockAt(
                        block.get('x') + stepX,
                        block.get('y') + stepY,
                        sortedBlocks
                    )
                ) {
                    block = block.set('x', block.get('x') + stepX);
                    block = block.set('y', block.get('y') + stepY);
                    moved = true;
                }
                sortedBlocks = sortedBlocks.set(i, block);
            }
        }
        this.setState({ level: level.set('blocks', sortedBlocks) });
        if (moved) {
            this.setState({
                moves: this.state.moves + 1
            });
        }
    }

    getBlockAt(x, y, _blocks) {
        const { level } = this.state;
        const blocks = _blocks ? _blocks : level.get('blocks');
        const size = level.get('size');
        if (x >= size || y >= size || y < 0 || x < 0) return true;
        for (let i = 0; i < blocks.size; i++) {
            let block = blocks.get(i);
            if (
                block.get('x') === x &&
                block.get('y') === y &&
                block.get('type') !== BLOCK_TYPE_TARGET
            ) {
                return block;
            }
        }
        return false;
    }

    checkIfFinished() {
        const { level } = this.state;
        const blocks = level.get('blocks');
        for (let i = 0; i < blocks.size; i++) {
            let block = blocks.get(i);
            let blockAt = this.getBlockAt(block.get('x'), block.get('y'));
            if (
                block.get('type') === BLOCK_TYPE_TARGET &&
                (!blockAt || blockAt.get('color') !== block.get('color'))
            ) {
                return false;
            }
        }
        return true;
    }

    restart() {
        const { level } = this.props;
        this.setState({
            level: fromJS(level.toJS()),
            moves: 0
        });
    }

    render() {
        const { level, moves } = this.state;
        const { onBack } = this.props;
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
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
                <Button
                    onClick={onBack}
                    icon={mdiArrowLeft}
                    className={'-ml-2'}
                />
                <div className={'flex flex-row justify-between w-full'}>
                    <Card top={'Züge'} value={moves.toString()} />
                    <Card
                        top={'Möglich in'}
                        value={possibleIn.toString()}
                        bottom={'Zügen'}
                    />
                    <Card
                        onClick={this.restart.bind(this)}
                        top={'Reset'}
                        value={<Icon path={mdiRestart} size={1.4} />}
                    />
                </div>
                <Swipeable {...config}>
                    <Game size={size} blocks={blocks} anim={moves} />
                </Swipeable>
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map),
    onBack: PropTypes.func
};

export default GameContainer;
