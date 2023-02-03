import {CONFIGS} from '../constants/config.js';


const initialState = {
    noOfQue : 5,
    category : '',
    difficulty : '',
    type: 'boolean'
}

export const config = (state =  {data : initialState}, action) => {
    switch (action.type) {
        case CONFIGS.STORE_CONFIG:
            return {...state, data: action.data}        
        default:
            return state;
    }
}