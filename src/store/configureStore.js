import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'


const loggerMiddleware = createLogger()

// Configure the store with reducers, initial state (if provided) and react-thunk
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
}
