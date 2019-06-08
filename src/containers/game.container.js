import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Card from '../components/Card';
import Game from '../components/AnimGame';
import { Swipeable } from 'react-swipeable';
import FinishGame from '../components/FinishGame';
import { mdiArrowLeft, mdiRestart, mdiUndo } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '../components/Button';
import { finishLevel } from '../actions/levels.actions';
import {
    goToMenu,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    restart,
    undo
} from '../actions/play.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getCurrentMoveCount,
    isLevelCompleted
} from '../selectors/play.selectors';
import { withTranslation } from 'react-i18next';

class GameContainer extends Component {
    render() {
        const {
            goToMenu,
            moveRight,
            moveLeft,
            moveUp,
            moveDown,
            level,
            moves,
            undo,
            restart,
            isCompleted,
            t
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
                    <Card top={t('moves')} value={moves.toString()} />
                    <Card
                        top={t('possibleIn')}
                        value={possibleIn.toString()}
                        bottom={t('inMoves')}
                    />
                    <Card
                        onClick={undo}
                        top={t('undo')}
                        value={<Icon path={mdiUndo} size={1.4} />}
                    />
                    <Card
                        onClick={restart}
                        top={t('reset')}
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
    finishLevel: PropTypes.func,
    moveLeft: PropTypes.func,
    moveRight: PropTypes.func,
    moveUp: PropTypes.func,
    moveDown: PropTypes.func,
    moves: PropTypes.number,
    restart: PropTypes.func,
    undo: PropTypes.func,
    goToMenu: PropTypes.func,
    isCompleted: PropTypes.bool,
    t: PropTypes.func
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
        moves: getCurrentMoveCount(state),
        isCompleted: isLevelCompleted(state)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(GameContainer));
