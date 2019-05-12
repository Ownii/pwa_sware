import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import PropTypes from 'prop-types';

export class Home extends Component {
    render() {
        return <div className={'flex items-start'}>Hello Home.</div>;
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
