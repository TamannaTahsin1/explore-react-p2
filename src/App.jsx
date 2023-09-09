import './App.css';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Team from './Team';

function App() {
  function handleClick (){
    alert('button clicked');
  }
  const handleClick2 =() =>{
    alert('button 2 clicked')
  }
  const addToFour = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert('third button clicked')}}>Click me3</button>
      <button onClick={() => addToFour(3)}>Click me 4</button>
    </>
  )
}


export default App
