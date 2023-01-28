import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
// Header Component
const Header = (props) => (
    <header>
      <div>
        <h1>{props.msg}</h1>
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
  const TechList = (props) => {
    const techs = props.techs;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
  
  // Main Component
  const Main = (props) => (
    <main>
      <div className='main-wrapper'>
        <p>Main section of page</p>
        <ul>
          <TechList techs={props.techs}/>
        </ul>
        <UserCard />
      </div>
    </main>
  )
  
  // Footer Component
  const Footer = (props) => {
    console.log(props);
    return (
    <footer>
        {
        props.visible ?
      <div className='footer-wrapper'>
        <p>Copyright 2020</p>
      </div> :
      ""
        }
    </footer>
  )
    };
  
  // The App, or the parent or the container component
  const Component = () => (
    <div className='component'>
      <Header msg="Header:This is from props "/>
      <Main techs={['HTML', 'CSS', 'JavaScript', 'PHP']}/>
      <Footer visible={true}/>
    </div>
  )
  
  //const rootElement = document.getElementById('root')
  // we render the App component using the ReactDOM package
  // ReactDOM.render(<Component />, rootElement)
  export default Component;