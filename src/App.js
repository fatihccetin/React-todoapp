import React from 'react';
import {useTodoLayerValue} from "./context/TodoContext";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  
  console.log(todos);
  return (
    <div>
      App
    </div>
  )
}

export default App
