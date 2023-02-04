import {QUIZ , QUIZ_STATUS} from '../constants/constants.js';
const initialState = {
    'status' : QUIZ_STATUS.COMPLETED,
    'data' : [
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What was the first monster to appear alongside Godzilla?",
            "correct_answer": "Anguirus",
            "incorrect_answers": [
                "King Kong",
                "Mothra",
                "King Ghidora"
            ],
            "options": [
                "King Ghidora",
                "King Kong",
                "Mothra",
                "Anguirus"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of these is not a wonder weapon in &quot;Call Of Duty: Zombies&quot;?",
            "correct_answer": "R115 Resonator",
            "incorrect_answers": [
                "GKZ-45 Mk3",
                "Ray Gun",
                "Scavenger"
            ],
            "options": [
                "GKZ-45 Mk3",
                "R115 Resonator",
                "Ray Gun",
                "Scavenger"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the correct order of operations for solving equations?",
            "correct_answer": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
            "incorrect_answers": [
                "Addition, Multiplication, Division, Subtraction, Addition, Parentheses",
                "Parentheses, Exponents, Addition, Substraction, Multiplication, Division",
                "The order in which the operations are written."
            ],
            "options": [
                "Addition, Multiplication, Division, Subtraction, Addition, Parentheses",
                "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
                "The order in which the operations are written.",
                "Parentheses, Exponents, Addition, Substraction, Multiplication, Division"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "&quot;The Genius&quot; is the original and secondary name of which Wu-Tang Clan member?",
            "correct_answer": "GZA",
            "incorrect_answers": [
                "Ghostface Killah",
                "Ol&#039; Dirty Bastard",
                "Raekwon the Chef"
            ],
            "options": [
                "Ol&#039; Dirty Bastard",
                "GZA",
                "Ghostface Killah",
                "Raekwon the Chef"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Who was the Author of the manga Monster Hunter Orage?",
            "correct_answer": "Hiro Mashima",
            "incorrect_answers": [
                "Shin Yamamoto",
                "Keiichi Hikami",
                "Hirohiko Araki"
            ],
            "options": [
                "Shin Yamamoto",
                "Hirohiko Araki",
                "Hiro Mashima",
                "Keiichi Hikami"
            ]
        }
        ],
    'result' : [false, false, false, true, false]
}

export const quiz = (state =  initialState, action) => {
    switch (action.type) {
        case QUIZ.UPDATE_QUIZ_STATUS:
            return {...state , 'status' : action.data};     
        case QUIZ.UPDATE_QUIZ_DATA:
            return {...state , 'data' : action.data};   
        case QUIZ.SAVE_QUIZ_RESULT:
            return {...state , 'result' : action.data};     
        default:
            return state;
    }
}