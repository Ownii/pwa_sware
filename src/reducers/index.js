import { combineReducers } from 'redux';
import route from './route.reducer';
import levels from './levels.reducer';
import play from './play.reducer';

export default combineReducers({
    route,
    levels,
    play
});
