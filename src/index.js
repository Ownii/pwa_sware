import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import './styles.css';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

const renderApp = () => {
    const Router = require('./containers/router.container').default;
    render(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Router />
            </I18nextProvider>
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
