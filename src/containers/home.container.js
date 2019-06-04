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
        return (
            <div className={'flex items-start w-100 m-auto'}>
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {
        const { play } = this.state;
        const { levels } = this.props;
        if (play >= 0)
            return (
                <GameContainer
                    level={levels.get(play)}
                    onBack={() => this.showMenu()}
                    onNextLevel={this.onNextLevel.bind(this)}
                />
            );
        return (
            <LevelSelection
                levels={levels}
                onSelectLevel={index => this.setState({ play: index })}
            />
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
