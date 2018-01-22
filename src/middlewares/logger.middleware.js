const normalizeState = state => {
    return Object.keys(state).reduce(
        (agg, cur) => Object.assign(agg, { [cur]: state[cur].toJS() }),
        {}
    );
};

export default () => store => next => action => {
    /* eslint-disable no-console */
    console.debug(`store:`, normalizeState(store.getState()));
    console.debug(`action:`, action);
    const result = next(action);
    console.debug(`store`, normalizeState(store.getState()));
    /* eslint-enable no-console */
    return result;
};
