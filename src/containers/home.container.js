import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import GameContainer from './game.container';
import LevelSelection from './levelselection.container';

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
        const { play } = this.state;
        const { levels } = this.props;
        if (play >= 0) return this.renderPlayingGame();
        return (
            <LevelSelection
                levels={levels}
                onSelectLevel={index => this.setState({ play: index })}
            />
        );
    }

    renderPlayingGame() {
        const { play } = this.state;
        const { levels } = this.props;
        return (
            <div className={'flex items-start w-80 m-auto'}>
                <GameContainer
                    level={levels.get(play)}
                    onBack={() => this.showMenu()}
                    onNextLevel={this.onNextLevel.bind(this)}
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
