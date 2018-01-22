import { combineReducers } from 'redux';
import route from './route.reducer';
import users from './users.reducer';

export default combineReducers({
    route,
    users
});
