import { defaultCipherList } from "constants";
import React from "react";
import './TodoList.css';

interface TodoListProps {
  items: {id: string, text:string}[]
  onDeleteTodo: (id: string) => void;
}

function TodoList(props: TodoListProps): React.ReactElement {
  return <ul>
    {props.items.map(todo => 
    <li key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
    </li>
    )}
  </ul>
}

export default TodoList;