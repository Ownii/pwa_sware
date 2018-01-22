import history from '../history';
import { CHANGE_ROUTE } from '../actions/route.action';
import curry from '../utils/curry';

function initialize(store) {
    dispatchAction(store, history.location);
}

function subscribe(store) {
    history.listen(curry(dispatchAction, store));
}

function dispatchAction(store, location) {
    store.dispatch({
        type: CHANGE_ROUTE,
        path: location.pathname
    });
}

function handle(next, action) {
    next(action);
}

export default function createRouterMiddleware() {
    return store => {
        initialize(store);
        subscribe(store);
        return next => action => handle(next, action);
    };
}
