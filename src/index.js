import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM, { findDOMNode } from 'react-dom'

const Todo = ({ todo: { userId, id, title, completed } }) => {
  return (
    <div>
      <h3>{title} {completed ? "Completed" : "Pending"}</h3>      
      
    </div>
  )
}

const App = (props) => {
  // setting initial state and method to update state
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} TODOs in the api</p>
        <div>
          {data.map((todo) => (
            <Todo todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)