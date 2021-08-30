import React from 'react';
import {GrFormClose, GrFormEdit, GrFormCheckmark} from "react-icons/gr";
import {useTodoLayerValue} from "../context/TodoContext";

const Todo = ({todo}) => {
    const[{ }, dispatch] = useTodoLayerValue();

    const removeTodo = todoId =>{

    } 
    return (
        <div className="todo-row">
            <div>
                {todo.content}
            </div>

            <div className="todo-icons">
                      <GrFormClose className="todo-icon" onClick={removeTodo(todo.id)} />
                      <GrFormEdit className="todo-icon"/>

            </div>            
        </div>
    )
};

export default Todo;
