import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// if it is functional components
class App extends Component {
  greetPeople = (e) => {
    console.log(e);
    alert('welcome to the Jungle!!')
  }
  render() {
    return <button onClick={this.greetPeople}> Yo </button>
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)