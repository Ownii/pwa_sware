import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { mdiApps, mdiArrowRight } from '@mdi/js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { finishLevel } from '../actions/levels.actions';
import { goToMenu, playLevel, restart } from '../actions/play.actions';
import { getNextLevel } from '../selectors/play.selectors';
import { Map } from 'immutable';
import { withTranslation } from 'react-i18next';

class FinishGame extends Component {
    render() {
        const {
            moves,
            possibleIn,
            restart,
            goToMenu,
            nextLevel,
            playLevel,
            t
        } = this.props;
        return (
            <div
                className="absolute w-full h-full text-center flex flex-col justify-between"
                style={{
                    background: '#f0eff0bf',
                    boxSizing: 'border-box',
                    left: '0',
                    top: '0'
                }}
            >
                <h2 className="mt-16 mb-16">{t('levelCompleted')}</h2>
                {moves > possibleIn && (
                    <div>
                        <p className="mb-8">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('neededMoves', { moves })
                                }}
                            />
                        </p>
                        <p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('possibleInMoves', { possibleIn })
                                }}
                            />
                        </p>
                        <Button
                            className="mt-4"
                            text={t('retry')}
                            onClick={restart}
                        />
                    </div>
                )}
                {moves === possibleIn && <p>{t('bestMoves')}</p>}
                {moves < possibleIn && <p>{t('notPossible')}</p>}
                <div className="flex flex-row justify-between p-2">
                    <Button onClick={goToMenu} icon={mdiApps} />
                    {nextLevel && (
                        <Button
                            onClick={() => playLevel(nextLevel)}
                            icon={mdiArrowRight}
                        />
                    )}
                </div>
            </div>
        );
    }
}

FinishGame.propTypes = {
    moves: PropTypes.number.isRequired,
    possibleIn: PropTypes.number.isRequired,
    restart: PropTypes.func,
    goToMenu: PropTypes.func,
    nextLevel: PropTypes.instanceOf(Map),
    playLevel: PropTypes.func,
    t: PropTypes.func
};

const mapStateToProps = state => ({
    moves: state.play.get('moveHistory').size,
    possibleIn: state.play.get('level').get('possibleIn'),
    nextLevel: getNextLevel(state)
});

const mapDispatchToProps = dispatch => ({
    finishLevel: compose(
        dispatch,
        finishLevel
    ),
    restart: compose(
        dispatch,
        restart
    ),
    goToMenu: compose(
        dispatch,
        goToMenu
    ),
    playLevel: compose(
        dispatch,
        playLevel
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(FinishGame));
