import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function navigateToHome (e) {
    e.preventDefault();
    window.location.reload();
}

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="javascript:void(0)" onClick={navigateToHome}>
            Quiz
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;