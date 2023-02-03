import React from 'react';
import { connect } from 'react-redux';
import { QUIZ_STATUS } from '../constants/constants.js';

import Header from './Header';
import Config from './Config';
import Quiz from './Quiz';
import Loader from './Loader';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = (props) => {
  const { loader , quizStatus} = props

  return (
    <>
    <Header></Header>
    {loader && (<Loader > Loading </Loader>)}     
    {!loader && quizStatus === QUIZ_STATUS.RESET && (<Config></Config>)}     
    {!loader && quizStatus === QUIZ_STATUS.START && (<Quiz></Quiz>)}        
    {!loader && quizStatus === QUIZ_STATUS.COMPLETED && (<Result></Result>)}        
    </>
  );
};

// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        configData: state.config.data,
        loader : state.loader,
        quizStatus : state.quiz
    };
}


// Wire it all up and export
export default connect(mapStateToProps)(App);
