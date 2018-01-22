import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './home.container';
import Root from './root.container';

import history from '../history';

class RouterContainer extends Component {
    render() {
        return (
            <Router history={history}>
                <Root>
                    <Route path="/" exact component={Home} />
                </Root>
            </Router>
        );
    }
}

export default RouterContainer;
