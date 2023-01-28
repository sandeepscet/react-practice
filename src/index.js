import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('In constructor');
    console.log(props);
    this.state = {
      count: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('in getDerivedStateFromProps'    )
    console.log({props})
    console.log({state})
    return null
  }
  componentDidMount() {
    console.log('in componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('in shouldComponentUpdate')
    console.log({nextProps})
    console.log({nextState})
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate')
    console.log({prevProps})
    console.log({prevState})
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('in componentDidUpdate')
    console.log({prevProps})
    console.log({prevState})
  }



  componentWillUnmount(){
    console.log('in componentWillUnmount')
  }

  updateCounter= () => {
    this.setState({
      count: this.state.count + 1,
    })
  }


  render() {
    console.log('Start of render')
    return (
      <div className='App'>
        <h1>Cycle of Life</h1>
        <button onClick={this.updateCounter}>Count++</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)