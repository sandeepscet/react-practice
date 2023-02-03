import React from 'react';
import { connect } from 'react-redux';
import * as CONFIGACTIONS from '../actions/config.js';
import Header from './Header';
import Config from './Config';
import Quiz from './Quiz';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = (props) => {
  console.log({props});
  const {configData} = props
  if(!configData.finallySaved)
  {
    props.saveConfig({'finallySaved' : true});
  }
  console.log('saveConfig called');

  return (
    <>
    <Header></Header>
    <Config>this is app</Config>        
    <Quiz>this is app</Quiz>        
    <Result>this is app</Result>        
    </>
  );
};

// Get state data from store to props
const mapStateToProps = (state) => {
  console.log({state});
    return {
        configData: state.config.data
    };
}

const mapDispatchToProps = dispatch => {
  return {
    //saveConfig: configData => dispatch(CONFIGACTIONS.saveConfig(configData))
    saveConfig: configData => { console.log({configData} , 'prop'); dispatch(CONFIGACTIONS.saveConfig(configData))}
  };
};

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(App);
