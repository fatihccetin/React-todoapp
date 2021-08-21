import React,{useState} from 'react';
import {useTodoLayerValue} from "./context/TodoContext";
import TodoList from './components/TodoList';

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content , setContent] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();  // Sayfanın yenilenmesini engelliyoruz.
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" onChange={(event) => setContent(event.target.value)} 
        value={content} />
        <button className="todo-button">
          Ekle
        </button>

      </form>
      {/* {Todo listesii} */}

      {/* <TodoList todos ={todos}/> */}
    </div>
  )
}

export default App
