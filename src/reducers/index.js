import { combineReducers } from 'redux';
import route from './route.reducer';
import levels from './levels.reducer';

export default combineReducers({
    route,
    levels
});
