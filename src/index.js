import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles.css';

const renderApp = () => {
    const Router = require('./containers/router.container').default;
    render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.getElementById('root')
    );
};
if (module.hot) {
    module.hot.accept('./containers/router.container', () => {
        setTimeout(renderApp);
    });
}
renderApp();
