import './App.css';

const footer = (
  <footer
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <small>&copy;2023</small>
  </footer>
)
const title = <h1 className='title'>Getting Started React</h1>
 const inputField = (
      <div>
        <label htmlFor='firstname'>First Name</label>
        <input type='text' id='firstname' placeholder='First Name' />
      </div>
    )

const cars = ['Tesla', 'Tata', 'Mercedes' ]
const carsFormatted = cars.map((car) => <li key={car}>{car}</li>)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Practice</h1>
      </header>
      {title}
      {inputField}
      {carsFormatted}
      {footer}
    </div>
  );
}

export default App;
