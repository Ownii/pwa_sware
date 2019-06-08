import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Map, fromJS } from 'immutable';
import Level from '../components/Level';
import { compose } from 'redux';
import { playLevel } from '../actions/play.actions';

class LevelSelection extends Component {
    render() {
        const { levels, completions, playLevel } = this.props;
        return (
            <div className={'p-2 flex content-start flex-wrap'}>
                {levels.toJS().map(level => {
                    let neededMoves = completions.get('' + level.id);
                    return (
                        <Level
                            onClick={() => playLevel(fromJS(level))}
                            className={''}
                            key={level.id}
                            id={level.id}
                            completed={neededMoves !== undefined}
                            completedBest={neededMoves === level.possibleIn}
                        />
                    );
                })}
            </div>
        );
    }
}

LevelSelection.propTypes = {
    levels: PropTypes.instanceOf(List).isRequired,
    completions: PropTypes.instanceOf(Map),
    playLevel: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    playLevel: compose(
        dispatch,
        playLevel
    )
});
const mapStateToProps = ({ levels }) => {
    return {
        completions: levels.get('completions'),
        levels: levels.get('levels')
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LevelSelection);
