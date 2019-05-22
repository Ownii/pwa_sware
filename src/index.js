import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles.css';
//import registerServiceWorker from './registerServiceWorker';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
    const registration = runtime.register();
}

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
//registerServiceWorker();
