import React from 'react';
import { connect } from 'react-redux';
import * as CONFIGACTIONS from '../actions/config.js';
import { QUIZ_STATUS } from '../constants/constants.js';

import Header from './Header';
import Config from './Config';
import Quiz from './Quiz';
import Loader from './Loader';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = (props) => {
  const {configData, loader , quizStatus} = props

  return (
    <>
    <Header></Header>
    {loader && (<Loader >this is Loader </Loader>)}     
    {!loader && quizStatus === QUIZ_STATUS.RESET && (<Config >this is app</Config>)}     
    {!loader && quizStatus === QUIZ_STATUS.START && (<Quiz>this is app</Quiz>)}        
    {!loader && quizStatus === QUIZ_STATUS.COMPLETED && (<Result>this is app</Result>)}        
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

const mapDispatchToProps = dispatch => {
  return {
    saveConfig: configData => dispatch(CONFIGACTIONS.saveConfig(configData))
  };
};

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(App);