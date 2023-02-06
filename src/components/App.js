import React, { Suspense }  from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QUIZ_STATUS } from '../constants/constants.js';
import * as QUIZACTIONS from '../actions/quiz';

import Header from './Header';
import Config from './Config';
import Quiz from './Quiz';
import Loader from './Loader';
import Result from './Result';

import ErrorBoundary from './ErrorBoundary';
import './App.css';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = (props) => {
  const { loader , quizStatus  } = props  

  function startquiz(config){
     props.fetchQuiz(config);
  }

  return (
    <>
    <Header></Header>
    <React.StrictMode>
    {loader && (<Loader > Fetching Data... </Loader>)}     
    {!loader && quizStatus === QUIZ_STATUS.RESET && (<Config  startquiz={startquiz}></Config>)}     
    {!loader && quizStatus === QUIZ_STATUS.START && (<Quiz ></Quiz>)}        
    {!loader && quizStatus === QUIZ_STATUS.COMPLETED && (<Result></Result>)} 
    {!loader && quizStatus === QUIZ_STATUS.RESET && (<ErrorBoundary>
      <Suspense fallback={<div>Fetching Todo, Tada!!...</div>}>
          <LazyComponent />
      </Suspense>  
    </ErrorBoundary>)}  
    </React.StrictMode>   
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
export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(App);
