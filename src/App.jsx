import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    if (count === 0) {
      alert('Not Negtive allowed');
      return;
    }
    setCount(count - 1);
  };
  const handelReset = () => {
    setCount(0);
  };
  // console.log(count);
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={countPlus}>+</button>
        <button onClick={countMinus}>-</button>
        <button onClick={handelReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
