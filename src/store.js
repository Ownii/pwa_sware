import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

import createRouterMiddleware from './middlewares/router.middleware';
import createLoggerMiddleware from './middlewares/logger.middleware';

const loggerMiddleware = createLoggerMiddleware();
const routerMiddleware = createRouterMiddleware();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(loggerMiddleware, sagaMiddleware, routerMiddleware)
);
sagaMiddleware.run(sagas);
if (module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });
    module.hot.accept('./sagas', () => {
        /* eslint-disable no-console */
        console.warn('saga reloading is currently not supported.');
        /* eslint-enable no-console */
    });
}
export default store;
