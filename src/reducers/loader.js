import {LOADER} from '../constants/constants.js';

export const loader = (state =  false, action) => {
    switch (action.type) {
        case LOADER.HANDLE_LOADER:
            return action.data        
        default:
            return state;
    }
}