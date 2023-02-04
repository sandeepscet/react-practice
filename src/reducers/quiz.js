import {QUIZ , QUIZ_STATUS} from '../constants/constants.js';
const initialState = {
    'status' : QUIZ_STATUS.RESET,
    'data' : []
}

export const quiz = (state =  initialState, action) => {
    switch (action.type) {
        case QUIZ.UPDATE_QUIZ_STATUS:
            return {...state , 'status' : action.data};     
        case QUIZ.UPDATE_QUIZ_DATA:
            return {...state , 'data' : action.data};     
        default:
            return state;
    }
}