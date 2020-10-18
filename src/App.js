import React,{useState} from 'react';
import './App.css';

function App() {
  // this is way we use setState in functional components just use set keyword with variable name
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter Application using States/Hooks</h1>
       <div>
       <h2>Current count value is {count}</h2>
       <button  onClick={()=>setCount(0)} className="button">Reset Couter</button>
       <button onClick={()=>count>=10?"":setCount(count+1)} className="button">Increase Couter</button>
       <button onClick={()=>count<=0?"":setCount(count-1)} className="button">Decrease Couter</button>
       </div>
      </header>
    </div>
  );
}

export default App;
