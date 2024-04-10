import logo from './logo.svg';
import './App.css';

function App() {
  const array = [
    { key: 1, name: 'Zaritskiy Danylo'},
    { key: 2, name: 'Olexadnr Lytvynenko'},
    { key: 3, name: 'Gubitska Diana'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="list">
          {array.map((item) => (            
              <label key={item.key}><input type='checkbox'/>{item.name}</label>            
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
