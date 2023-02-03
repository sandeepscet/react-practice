import {QUIZ , QUIZ_STATUS} from '../constants/constants.js';

export const quiz = (state =  QUIZ_STATUS.RESET, action) => {
    switch (action.type) {
        case QUIZ.UPDATE_QUIZ_STATUS:
            return state;      
        default:
            return state;
    }
}