import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
// Header Component
const Header = () => (
    <header>
      <div>
        <h1>This is header</h1>
      </div>
    </header>
  )
  
  // User Card Component
  const UserCard = () => (
    <div className='user-card'>
      <img src={logo} alt='logo' />
      <h2>Asabeneh Yetayeh</h2>
    </div>
  )
  
  // TechList Component
  const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
  
  // Main Component
  const Main = () => (
    <main>
      <div className='main-wrapper'>
        <p>Main section of page</p>
        <ul>
          <TechList />
        </ul>
        <UserCard />
      </div>
    </main>
  )
  
  // Footer Component
  const Footer = () => (
    <footer>
      <div className='footer-wrapper'>
        <p>Copyright 2020</p>
      </div>
    </footer>
  )
  
  // The App, or the parent or the container component
  const Component = () => (
    <div className='component'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
  
  //const rootElement = document.getElementById('root')
  // we render the App component using the ReactDOM package
  // ReactDOM.render(<Component />, rootElement)
  export default Component;