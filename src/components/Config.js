import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import * as CONFIGACTIONS from '../actions/config.js';




const  Config = (props) => {
  const {configData} = props
  const [config, setConfig] = useState(configData);

  function onSubmit(e) {
    e.preventDefault();
    props.saveConfig(config);
    props.startquiz(config);    

  }

  return (
    <Container className='pt-3'>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="noOfQue">
        <Form.Label>Number of Questions</Form.Label>
        <Form.Control type="number" value={config.noOfQue} onChange={e =>setConfig({...config , noOfQue : parseInt(e.target.value,10)})} max="10" min="1"/>       
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Select Category</Form.Label>
        <Form.Select aria-label="Default select example" onChange={e =>setConfig({...config , category : e.target.value})} value={config.category}>
        <option value="">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="11">Film</option>
        <option value="20">Mythology</option>
        <option value="23">History</option>
      </Form.Select>          
      </Form.Group>

      <Form.Group className="mb-3" controlId="difficulty" >
        <Form.Label>Select Difficulty</Form.Label>
        <Form.Select aria-label="Default select example" onChange={e =>setConfig({...config , difficulty : e.target.value})} value={config.difficulty}>
        <option value="">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Form.Select>      
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Start
      </Button>
    </Form>
    </Container>
  );
  }
  

  // Get state data from store to props
const mapStateToProps = (state) => {
    return {
        configData: state.config.data
    };
}

const mapDispatchToProps = dispatch => {
  return {
    saveConfig: configData => dispatch(CONFIGACTIONS.saveConfig(configData))
  };
};

  export default connect(mapStateToProps, mapDispatchToProps)(Config);