import React, { useState, useRef } from 'react';

export const TodoForm = () => {
  const inputTodo = useRef(null);

  const addTodo = () => {
    const add = inputTodo.current.value;
  };
  
  return(
    <div>
      <input ref={inputTodo} placeholder="タスクを追加" type="text" />
      <button onClick={addTodo}>タスクを追加</button>
    </div>
  );
};
