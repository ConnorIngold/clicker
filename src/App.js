import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  };
  const Half = () => {
    setCount(count / 2);
  };
  const zero = () => {
    setCount(0);
  };    
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to the clicker</h1>
        <div id="amount" className="mt-5">
          <h3>{count}</h3>
          <div id="btns">
            <button className="btn btn-success" onClick={add}>
              Increment
            </button>
            <button className="btn btn-danger" onClick={minus}>
              Minus
            </button>
            <button className="btn btn-info" onClick={double}>
              Double
            </button>
            <button className="btn btn-warning" onClick={Half}>
              Half
            </button>
            <button className="btn btn-secondary" onClick={zero}>
              Zero
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
