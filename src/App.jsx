import {} from 'react';
import './App.css';
import Counter from './Component/Counter/Counter';
import RandomColor from './Component/RandomColor/RandomColor';
import ToDo from './Component/SimpleTodoApp/ToDo';
import LiveSearch from './Component/Live Search/LiveSearch';

function App() {
  // console.log(count);
  return (
    <>
      <Counter></Counter>
      <RandomColor></RandomColor>
      <ToDo></ToDo>
      <LiveSearch></LiveSearch>
    </>
  );
}

export default App;
