import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import { Map, fromJS } from 'immutable';
import allLevels from './levels/allLevels';

import createRouterMiddleware from './middlewares/router.middleware';
import createLoggerMiddleware from './middlewares/logger.middleware';

const loggerMiddleware = createLoggerMiddleware();
const routerMiddleware = createRouterMiddleware();
const sagaMiddleware = createSagaMiddleware();

const persistedStore = () => {
    let persistedCompletions = localStorage.getItem('completions');
    if (persistedCompletions !== null) {
        let completions = JSON.parse(persistedCompletions);
        return {
            levels: Map({
                levels: allLevels,
                completions: fromJS(completions)
            })
        };
    }
};
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        let completions = getState().levels.get('completions');
        localStorage.setItem('completions', JSON.stringify(completions.toJS()));
        return result;
    };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    persistedStore(),
    composeEnhancers(
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware,
            routerMiddleware,
            localStorageMiddleware
        )
    )
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
