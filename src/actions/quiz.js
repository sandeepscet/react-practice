import { QUIZ, QUIZ_STATUS } from '../constants/constants.js';

export const updateQuizStatus = (status) => {
    return {
        type: QUIZ.UPDATE_QUIZ_STATUS,
        data : status
    };
}

export const fetchQuiz = (config) => {
    return async dispatch => {
        function onSuccess(data) {
          dispatch({ type: QUIZ.UPDATE_QUIZ_DATA, data: data });
          return data;
        }
        function onError(error) {
          dispatch(updateQuizStatus(QUIZ_STATUS.RESET));
          return error;
        }
        try {
            const API = `https://opentdb.com/api.php?amount=${config.noOfQue}&category=${config.category}&difficulty=${config.difficulty}&type=${config.type}`;
            debugger;
            const response  = await fetch(API);
            const data = await response.json();
            if(data.response_code !== 0)
            {
                return onError("No Records Found");
            }
            else
            {
                return onSuccess(data.results);
            }
            
        } catch (error) {
            console.log(error);
          return onError(error);
        }
      }
}