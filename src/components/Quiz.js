import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import * as QUIZACTIONS from '../actions/quiz.js';
import {  QUIZ_STATUS } from '../constants/constants.js';


function Quiz(props) {
  const {qna , savedResult , savedResultCount} = props;
  const [result, setResult] = useState(savedResult);
  const nextQuestionIndex = savedResult.length === 0 ? 0 : savedResult.length;
  const current_question = qna[nextQuestionIndex]
  const options = current_question.options;

  function onSubmit(e) {
    e.preventDefault();
    savedResult.push(result === current_question.correct_answer ? true : false)
    props.saveResult(savedResult);
    
    if(savedResult.length === qna.length){
      props.showResult();
    }

  }

  function onChange(value) {
    setResult(value);
  }

  

  return (
    <Container className='pt-3'>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>{nextQuestionIndex + 1}. {current_question.question}</Form.Label>
        {options.map((option) => (
        <div key={option} className="mb-3">
          <Form.Check 
            type="radio"
            label={option}
            value={option}
            checked={result === option}
            onChange={e =>onChange( e.target.value)} 
          />         
        </div>
      ))}
      <Button variant="primary" type="submit">         Submit       </Button>      
      </Form.Group>
    </Form>
    </Container>
    );
  }
  
  
  // Get state data from store to props
const mapStateToProps = (state) => {
  const { quiz } = state;

  return {
      qna: quiz.data,
      savedResult: quiz.result,
      savedResultCount: quiz.result.length
  };
}

const mapDispatchToProps = dispatch => {
return {
  saveResult: result => dispatch(QUIZACTIONS.saveResult(result)),
  showResult: () => dispatch(QUIZACTIONS.updateQuizStatus(QUIZ_STATUS.COMPLETED))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);