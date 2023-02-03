export const quiz = (state = false, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return action.nextquestion;
        case 'SHOW_RESULT':
            return action.showresult;
        case 'START_QUIZ':
            return action.startquiz;
        case 'RESTART_QUIZ':
            return action.restartquiz;
        default:
            return state;
    }
}