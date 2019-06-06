import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { List, Map } from 'immutable';
import PropTypes from 'prop-types';
import GameContainer from './game.container';
import LevelSelection from './levelselection.container';
import { playLevel } from '../actions/play.actions';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onNextLevel() {
        const { play } = this.state;
        const { levels } = this.props;
        if (play < levels.size) this.setState({ play: play + 1 });
        else this.showMenu();
    }

    showMenu() {
        this.setState({ play: undefined });
    }

    render() {
        return (
            <div className={'flex items-start w-100 m-auto'}>
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {
        const { levels, playLevel, play } = this.props;
        if (play)
            return (
                <GameContainer
                    onBack={() => this.showMenu()}
                    onNextLevel={this.onNextLevel.bind(this)}
                />
            );
        return (
            <LevelSelection
                levels={levels}
                onSelectLevel={index => playLevel(levels.get(index))}
            />
        );
    }
}
const mapDispatchToProps = dispatch => ({
    playLevel: compose(
        dispatch,
        playLevel
    )
});

const mapStateToProps = ({ levels, play }) => {
    return {
        levels: levels.get('levels'),
        play: play.get('level')
    };
};
Home.propTypes = {
    levels: PropTypes.instanceOf(List),
    playLevel: PropTypes.func,
    play: PropTypes.instanceOf(Map)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
