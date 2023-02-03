import { QUIZ } from '../constants/constants.js';

export const updateQuizStatus = (status) => {
    return {
        type: QUIZ.UPDATE_QUIZ_STATUS,
        data : status
    };
}