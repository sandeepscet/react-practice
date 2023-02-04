import { QUIZ, QUIZ_STATUS } from '../constants/constants.js';
import { shuffle } from '../utils';

export const updateQuizStatus = (status) => {
    return {
        type: QUIZ.UPDATE_QUIZ_STATUS,
        data : status
    };
}

export const saveResult = (result) => {
    return {
        type: QUIZ.SAVE_QUIZ_RESULT,
        data : result
    };
}

export const saveData = (data) => {
    return {
        type: QUIZ.UPDATE_QUIZ_DATA,
        data : data
    };
}

export const fetchQuiz = (config) => {
    return async dispatch => {
        function onSuccess(data) {
          dispatch(saveData(data));
          dispatch(updateQuizStatus(QUIZ_STATUS.START));
          return data;
        }
        function onError(error) {
          dispatch(updateQuizStatus(QUIZ_STATUS.RESET));
          return error;
        }
        try {
            const API = `https://opentdb.com/api.php?amount=${config.noOfQue}&category=${config.category}&difficulty=${config.difficulty}&type=${config.type}`;
            const response  = await fetch(API);
            const data = await response.json();
            if(data.response_code !== 0)
            {
                return onError("No Records Found");
            }
            else
            {
                const result = data.results;
                const formattedResult = result.map((question) => { return {...question ,  'options' : shuffle([...question.incorrect_answers , question.correct_answer]) }} );
                
                return onSuccess(formattedResult);
            }
            
        } catch (error) {
            console.log(error);
          return onError(error);
        }
      }
}