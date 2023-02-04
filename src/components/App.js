import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QUIZ_STATUS } from '../constants/constants.js';
import * as QUIZACTIONS from '../actions/quiz';

import Header from './Header';
import Config from './Config';
import Quiz from './Quiz';
import Loader from './Loader';
import Result from './Result';

import './App.css';



const App = (props) => {
  const { loader , quizStatus, config  } = props  

  function startquiz(config){
     props.fetchQuiz(config);
  }

  return (
    <>
    <Header></Header>
    {loader && (<Loader > Fetching Data... </Loader>)}     
    {!loader && quizStatus === QUIZ_STATUS.RESET && (<Config  startquiz={startquiz}></Config>)}     
    {!loader && quizStatus === QUIZ_STATUS.START && (<Quiz ></Quiz>)}        
    {!loader && quizStatus === QUIZ_STATUS.COMPLETED && (<Result></Result>)}        
    </>
  );
};

// Get state data from store to props
const mapStateToProps = (state) => {  
    return {
        configData: state.config.data,
        loader : state.loader,
        quizStatus : state.quiz.status,
        qna : state.quiz.data
    };
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuizStatus :status => dispatch(QUIZACTIONS.updateQuizStatus(status)),
    fetchQuiz : config => dispatch(QUIZACTIONS.fetchQuiz(config))
  };
};

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(App);
