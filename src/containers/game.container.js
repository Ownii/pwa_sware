import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
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
    restart,
    goToMenu
} from '../actions/play.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isLevelCompleted } from '../selectors/play.selectors';

class GameContainer extends Component {
    render() {
        const {
            goToMenu,
            moveRight,
            moveLeft,
            moveUp,
            moveDown,
            level,
            moveHistory,
            undo,
            restart,
            isCompleted
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
                {isCompleted && <FinishGame />}
                <Button
                    onClick={goToMenu}
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
    finishLevel: PropTypes.func,
    moveLeft: PropTypes.func,
    moveRight: PropTypes.func,
    moveUp: PropTypes.func,
    moveDown: PropTypes.func,
    moveHistory: PropTypes.instanceOf(List),
    restart: PropTypes.func,
    undo: PropTypes.func,
    goToMenu: PropTypes.func,
    isCompleted: PropTypes.bool
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
    ),
    goToMenu: compose(
        dispatch,
        goToMenu
    )
});
const mapStateToProps = state => {
    return {
        level: state.play.get('level'),
        moveHistory: state.play.get('moveHistory'),
        isCompleted: isLevelCompleted(state)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
