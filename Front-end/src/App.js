import logo from './logo.svg';
import './App.css';

import Homepage from './Homepage';
function App() {
  return (
    <div className="App">
      <div className='Title'>
      <h1 style={{color: '#5858c1'}}>Weather App</h1>
      <Homepage/>
      </div>
    </div>
  );
}

export default App;
