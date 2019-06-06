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
import {
    moveRight,
    moveLeft,
    moveDown,
    moveUp,
    undo,
    restart
} from '../actions/play.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class GameContainer extends Component {
    constructor(props) {
        super(props);
    }

    getBlockAt(x, y, _blocks) {
        const { level } = this.props;
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
        const { level } = this.props;
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

    render() {
        const {
            onBack,
            onNextLevel,
            moveRight,
            moveLeft,
            moveUp,
            moveDown,
            level,
            moveHistory,
            undo,
            restart
        } = this.props;
        const possibleIn = level.get('possibleIn');
        const size = level.get('size');
        const blocks = level.get('blocks');
        const config = {
            onSwipedLeft: moveLeft,
            onSwipedRight: moveRight,
            onSwipedUp: moveUp,
            onSwipedDown: moveDown,
            preventDefaultTouchmoveEvent: true,
            trackMouse: true,
            delta: 50
        };
        return (
            <div className={'w-full'}>
                {this.checkIfFinished() && (
                    <FinishGame
                        moves={moveHistory.size}
                        possibleIn={possibleIn}
                        onRestart={restart}
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
                    <Card top={'Züge'} value={moveHistory.size.toString()} />
                    <Card
                        top={'Möglich in'}
                        value={possibleIn.toString()}
                        bottom={'Zügen'}
                    />
                    <Card
                        onClick={undo}
                        top={'Rückgängig'}
                        value={<Icon path={mdiUndo} size={1.4} />}
                    />
                    <Card
                        onClick={restart}
                        top={'Neustart'}
                        value={<Icon path={mdiRestart} size={1.4} />}
                    />
                </div>
                <Swipeable {...config}>
                    <Game size={size} blocks={blocks} anim={moveHistory.size} />
                </Swipeable>
            </div>
        );
    }
}

GameContainer.propTypes = {
    level: PropTypes.instanceOf(Map),
    onBack: PropTypes.func,
    onNextLevel: PropTypes.func,
    finishLevel: PropTypes.func,
    moveLeft: PropTypes.func,
    moveRight: PropTypes.func,
    moveUp: PropTypes.func,
    moveDown: PropTypes.func,
    moveHistory: PropTypes.array,
    restart: PropTypes.func,
    undo: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    finishLevel: compose(
        dispatch,
        finishLevel
    ),
    moveLeft: compose(
        dispatch,
        moveLeft
    ),
    moveRight: compose(
        dispatch,
        moveRight
    ),
    moveDown: compose(
        dispatch,
        moveDown
    ),
    moveUp: compose(
        dispatch,
        moveUp
    ),
    undo: compose(
        dispatch,
        undo
    ),
    restart: compose(
        dispatch,
        restart
    )
});
const mapStateToProps = ({ play }) => {
    return {
        level: play.get('level'),
        moveHistory: play.get('moveHistory')
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
