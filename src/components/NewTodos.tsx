import React from "react";

import { useRef } from "react";

const NewTodos: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
        //Throw error
        return;
    }
    //add todo to list of todos
    props.onAddTodo(enteredText);

  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
