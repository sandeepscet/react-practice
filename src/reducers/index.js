import { combineReducers } from 'redux';
import { config } from '../reducers/config';
import { loader } from '../reducers/loader';
import { quiz } from '../reducers/quiz';

// Combine all reducers into root reducer
export default combineReducers({
    config,
    loader,
    quiz
});