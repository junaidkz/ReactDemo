import logo from './logo.svg';
import './App.css';
import  {useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const handleClick = (e) => {
    const name = e.target.name;
    if (name === "increment") {
      setNumber(number + 1);
    } else if (name === "decrement") {
      setNumber(number - 1);
    }
  };
  return (
    <div className="App">
      <p>{number}</p>
      <button name="increment" onClick={handleClick}>Increment</button>
      <button name="decrement" onClick={handleClick}>Decrement</button>
    </div>
  );
}

export default App;
