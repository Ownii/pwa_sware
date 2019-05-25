import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import PropTypes from 'prop-types';
import GameContainer from './game.container';
import Level from '../components/Level';

export class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { play } = this.state;
        if (play) return this.renderPlayingGame();
        return this.renderLevelSelection();
    }

    renderLevelSelection() {
        const { levels } = this.props;
        return (
            <div className={'flex flex-row justify-around p-2 flex-wrap'}>
                {levels.toJS().map((level, index) => (
                    <Level
                        onClick={() =>
                            this.setState({ play: levels.get(index) })
                        }
                        className={'m-2'}
                        key={level.id}
                        id={level.id}
                    />
                ))}
            </div>
        );
    }

    renderPlayingGame() {
        const { play } = this.state;
        return (
            <div className={'flex items-start w-80 m-auto'}>
                <GameContainer
                    level={play}
                    onBack={() => this.setState({ play: undefined })}
                />
            </div>
        );
    }
}
const mapDispatchToProps = () => {
    return {};
};
const mapStateToProps = ({ levels }) => {
    return {
        levels: levels.get('levels')
    };
};
Home.propTypes = {
    levels: PropTypes.instanceOf(List)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
