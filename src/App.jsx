import {} from 'react';
import './App.css';
import Counter from './Component/Counter/Counter';
import RandomColor from './Component/RandomColor/RandomColor';
import ToDo from './Component/SimpleTodoApp/ToDo';

function App() {
  // console.log(count);
  return (
    <>
      <Counter></Counter>
      <RandomColor></RandomColor>
      <ToDo></ToDo>
    </>
  );
}

export default App;
