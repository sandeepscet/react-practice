import { combineReducers } from 'redux';
import { config } from '../reducers/config';

// Combine all reducers into root reducer
export default combineReducers({
    config
});