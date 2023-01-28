import React from 'react'
import logo from './logo.svg';

const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
      <img src={image} alt={firstName} />
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  )
  
  // A button component
  const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
  
  // CSS styles in JavaScript Object
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  
  // class based component
  class Header extends React.Component {
    constructor(props) {
      super(props)
      // the code inside the constructor run before any other code
    }
    render() {
      console.log(this.props.data)
      const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
      } = this.props.data
  
      return (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              {firstName} {lastName}
            </p>
            <small>{date}</small>
          </div>
        </header>
      )
    }
  }
  
  // TechList Component
  // class base component
  class TechList extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }
  
  // Main Component
  // Class Component
  class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <main>
          <div className='main-wrapper'>
            <p>Below is Tech List we Support</p>
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
            <UserCard user={this.props.user} />
            <Button
              text='Yo'
              onClick={this.props.greetPeople}
              style={buttonStyles}
            />
            <Button
              text='Show Time'
              onClick={this.props.handleTime}
              style={buttonStyles}
            />
          </div>
        </main>
      )
    }
  }
  
  // Footer Component
  // Class component
  class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }
  
  class Component extends React.Component {
    showDate = (time) => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
  
      const month = months[time.getMonth()].slice(0, 3)
      const year = time.getFullYear()
      const date = time.getDate()
      return ` ${month} ${date}, ${year}`
    }
    handleTime = () => {
      alert(this.showDate(new Date()))
    }
    greetPeople = () => {
      alert('Welcome to React Practice')
    }
    render() {
      const data = {
        welcome: 'This is welcome ',
        title: 'This is title',
        subtitle: 'This is subtitle',
        author: {
          firstName: 'Sandip',
          lastName: 'K',
        },
        date: 'Jan 1 , 2023',
      }
      const techs = ['HTML', 'CSS', 'JavaScript' , 'PHP']
  
      // copying the author from data object to user variable using spread operator
      const user = { ...data.author, image: logo }
  
      return (
        <div className='app'>
          <Header data={data} />
          <Main
            user={user}
            techs={techs}
            handleTime={this.handleTime}
            greetPeople={this.greetPeople}
          />
  
          <Footer date={new Date()} />
        </div>
      )
    }
}

  export default Component;