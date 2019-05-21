import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { mdiArrowRight, mdiApps } from '@mdi/js';

class FinishGame extends Component {
    render() {
        const { moves, possibleIn, onRestart } = this.props;
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
                <h2 className="mt-16 mb-16">Level abgeschlossen</h2>
                {moves > possibleIn && (
                    <div>
                        <p className="mb-8">
                            Du hast das Level in <b>{moves}</b> Zügen gelöst
                        </p>
                        <p>
                            Es ist möglich gewesen in <b>{possibleIn}</b> Zügen
                        </p>
                    </div>
                )}
                {moves === possibleIn && (
                    <p>Super du hast die optimale Lösung gefunden</p>
                )}
                {moves < possibleIn && <p>Keiner mag Schummler</p>}
                <Button
                    className="mt-4"
                    text={'Erneut versuchen'}
                    onClick={onRestart}
                />
                <div className="flex flex-row justify-between p-2">
                    <Button icon={mdiApps} />
                    <Button icon={mdiArrowRight} />
                </div>
            </div>
        );
    }
}

FinishGame.propTypes = {
    moves: PropTypes.number.isRequired,
    possibleIn: PropTypes.number.isRequired,
    onRestart: PropTypes.func
};

export default FinishGame;
