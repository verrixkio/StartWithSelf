import React, { useRef } from "react";
import './NewTodo.css';


type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

function NewTodo(props: NewTodoProps): React.ReactElement {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler (event: React.FormEvent) {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log("🚀 ~ file: NewTodo.tsx ~ line 9 ~ todoSubmitHandler ~ enteredText", enteredText)
    props.onAddTodo(enteredText);
  }
  
  return (
  <form onSubmit={todoSubmitHandler}>
    <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}></input>
    </div>
    <button type="submit">Add Todo</button>
  </form>
  )
};

export default NewTodo;