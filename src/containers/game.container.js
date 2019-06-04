import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
import { BLOCK_TYPE_MOVE, BLOCK_TYPE_TARGET } from '../utils/constants';
import { Swipeable } from 'react-swipeable';
import FinishGame from '../components/FinishGame';
import { mdiRestart, mdiArrowLeft, mdiUndo } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '../components/Button';
import { finishLevel } from '../actions/levels.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: fromJS(props.level.toJS()),
            moveHistory: []
        };
        this.animVal = 0;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) this.restart();
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

    move(stepX, stepY, addMove = true) {
        const { level, moveHistory } = this.state;
        const { finishLevel } = this.props;
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
        let mutatedLevel = level.set('blocks', sortedBlocks);
        if (moved) {
            this.animVal++;
            if (addMove) {
                moveHistory.push([stepX, stepY]);
            }
            if (this.checkIfFinished())
                finishLevel(level.get('id'), moveHistory.length);
        }
        this.setState({
            level: mutatedLevel,
            moveHistory: moveHistory
        });
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
            moveHistory: []
        });
    }

    undo() {
        const { moveHistory } = this.state;
        let lastMove = moveHistory.pop();
        if (lastMove) {
            this.move(lastMove[0] * -1, lastMove[1] * -1, false);
            this.setState({
                moveHistory: moveHistory
            });
        }
    }

    render() {
        const { level, moveHistory } = this.state;
        const { onBack, onNextLevel } = this.props;
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
                        moves={moveHistory.length}
                        possibleIn={possibleIn}
                        onRestart={this.restart.bind(this)}
                        onBack={onBack}
                        onNextLevel={onNextLevel}
                    />
                )}
                <Button
                    onClick={onBack}
                    icon={mdiArrowLeft}
                    className={'-mb-2'}
                />
                <div className={'flex flex-row justify-between w-full'}>
                    <Card top={'Züge'} value={moveHistory.length.toString()} />
                    <Card
                        top={'Möglich in'}
                        value={possibleIn.toString()}
                        bottom={'Zügen'}
                    />
                    <Card
                        onClick={this.undo.bind(this)}
                        top={'Rückgängig'}
                        value={<Icon path={mdiUndo} size={1.4} />}
                    />
                    <Card
                        onClick={this.restart.bind(this)}
                        top={'Neustart'}
                        value={<Icon path={mdiRestart} size={1.4} />}
                    />
                </div>
                <Swipeable {...config}>
                    <Game size={size} blocks={blocks} anim={this.animVal} />
                </Swipeable>
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map),
    onBack: PropTypes.func,
    onNextLevel: PropTypes.func,
    finishLevel: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    finishLevel: compose(
        dispatch,
        finishLevel
    )
});
const mapStateToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
