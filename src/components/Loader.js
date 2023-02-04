import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Loader({children}) {
    return (
      <Container className='pt-3'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {children}        
      </Container>
    );
  }
  
  export default Loader;