import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resourcesReducer from './resources';

export default combineReducers({
    resources: resourcesReducer,
    routing: routerReducer
});
