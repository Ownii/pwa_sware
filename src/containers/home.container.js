import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from '../utils/compose';

import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { requestUsers } from '../actions/users.actions';

export class Home extends Component {
    componentDidMount() {
        this.props.requestUsers();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={'flex items-start'}>Hello Home.</div>;
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestUsers: compose(dispatch, requestUsers)
    };
};
const mapStateToProps = ({ users }) => {
    return {
        users
    };
};
Home.propTypes = {
    users: PropTypes.instanceOf(Map),
    requestUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
