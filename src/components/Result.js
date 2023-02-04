import React  from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import * as QUIZACTIONS from '../actions/quiz.js';
import {  QUIZ_STATUS } from '../constants/constants.js';



function Result(props) {
  const {qna , result } = props;

  const restartQuiz = () => {
    props.restartQuiz();
    props.saveResult([]);
  };
  
  const resetQuiz = () => {
    props.resetQuiz();
    props.saveResult([]);
  };

    return (
      <>
      <Container className='pt-3'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Questions</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
      {qna.map((question , index) => (
        <tr key={question.question}>
          <td>{index + 1}</td>
          <td>{question.question}</td>
          <td>{result[index] ? 
          <Badge bg="success">        Correct       </Badge> : 
          <Badge bg="danger">        Incorrect       </Badge>
          }</td>          
        </tr>))}      
      </tbody>
    </Table>
    </Container>
    <Container className='pt-3'>
      <Button variant="primary" type="button" className='float-start' onClick={restartQuiz}>  Restart </Button>      
      <Button variant="primary" type="button"  className='float-end' onClick={resetQuiz}>  Reset </Button>      
    </Container>
    </>
    );
  }
  
  const mapStateToProps = (state) => {
    const { quiz } = state;
  
    return {
        qna: quiz.data,
        result: quiz.result
    };
  }
  
  const mapDispatchToProps = dispatch => {
  return {
    saveResult: result => dispatch(QUIZACTIONS.saveResult(result)),
    restartQuiz: () => dispatch(QUIZACTIONS.updateQuizStatus(QUIZ_STATUS.START)),
    resetQuiz: () => dispatch(QUIZACTIONS.updateQuizStatus(QUIZ_STATUS.RESET)),
  };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Result);