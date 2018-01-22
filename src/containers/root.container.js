import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class RootContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-col minHeight-screen">
                <div className="container mx-auto flex flex-row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

RootContainer.propTypes = {
    children: PropTypes.any
};

export default RootContainer;
