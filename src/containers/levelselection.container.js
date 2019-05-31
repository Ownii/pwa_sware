import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import Level from '../components/Level';

class LevelSelection extends Component {
    render() {
        const { levels, completions, onSelectLevel } = this.props;
        return (
            <div className={'p-2 flex content-start flex-wrap'}>
                {levels.toJS().map((level, index) => {
                    let neededMoves = completions.get('' + level.id);
                    return (
                        <Level
                            onClick={() => onSelectLevel(index)}
                            className={''}
                            key={level.id}
                            id={level.id}
                            completed={neededMoves}
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
    onSelectLevel: PropTypes.func.isRequired
};

const mapDispatchToProps = () => {
    return {};
};
const mapStateToProps = ({ levels }) => {
    return {
        completions: levels.get('completions')
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LevelSelection);
