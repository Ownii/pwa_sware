import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import PropTypes from 'prop-types';
import GameContainer from './game.container';

export class Home extends Component {
    render() {
        const { levels } = this.props;
        return (
            <div className={'flex items-start'}>
                <GameContainer level={levels.get(0)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
